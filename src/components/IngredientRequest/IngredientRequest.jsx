import axios from "axios";
import { useEffect, useState } from "react";

const IngredientRequest = ({ ingredientToFind }) => {
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Effet dans lequel on réalise la requête
  // Attention! Celui-ci doit être limité au nom de la gare
  useEffect(() => {
    //! Mise à jour des states avant d'envoyer la requête
    setSearchResult(null);
    setError(false);
    setLoading(true);

    //!Requête AJAX (via Axios)
    // Requête : https://api.spoonacular.com/recipes/complexSearch?apiKey=8565a82cbb824636a7f9b75b960b1233&query=${query.value}&addRecipeInstructions=true&instructionsRequired=true&number=3

    axios
      .get("https://api.spoonacular.com/recipes/complexSearch", {
        // L'option «params» permet de gérer les paramètres «get» de la requête via Axios
        params: {
          apiKey: "8565a82cbb824636a7f9b75b960b1233",
          query: ingredientToFind,
          addRecipeInstructions: true,
          instructionsRequired: true,
          number: 3,
        },
      }) .then(({ data }) => {

        //? Données brutes reçues depuis la WebAPI
        console.log(data);

        data.results.forEach(function (oneResult) {
          console.log(oneResult.id);
          // On s'assure que la 1ère lettre de chaque titre soit en majuscule
          const recipeTitle = oneResult.title.charAt(0).toUpperCase() + oneResult.title.slice(1);
          axios.get(
            `https://api.spoonacular.com/recipes/${oneResult.id}/information`,{
              params: {
                apiKey: "8565a82cbb824636a7f9b75b960b1233",
                includeNutrition: true,
              },

          })
            .then(({ data }) => {
              //? Données brutes reçues depuis la WebAPI
              console.log(data);
            
              //? Convertit les données duans un format adapté à NOS besoins
              const result = {
                title: recipeTitle,
                id: data.id,
                url: data.sourceUrl,
                img: data.image,


                departures: data.departures.departure.map(
                    dep => ({
                        id: dep.id,
                        stationName: dep.station,
                        time: new Date(dep.time * 1000),
                        delay: dep.delay / 60,
                        platform: dep.platform
                    })
                )
              }
            })
        })

        
        //? Données converties
        console.log(result);

        //? Mise à jour du state après la requête
        setLoading(false);
        setSearchResult(result);

        //? Mise à jour du state s'il y a une erreur
        setLoading(false);
        setError();
      });
  }, [ingredientToFind]);

  return (
    <div>
      {isLoading ? (
        <p>Chargement...</p>
      ) : searchResult ? (
        <Dashboard {...searchResult} />
      ) : error ? (
        <p>Erreur lors de la requête</p>
      ) : (
        <p>Aucune donnée...</p>
      )}
    </div>
  );
};

export default IngredientRequest;
