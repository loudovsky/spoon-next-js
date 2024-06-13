import { useId, useState } from "react";

const SearchForm = ({ onSearch, labelContent }) => {
  //! Id d'accessibilité du formulaire
  const formId = useId();

  //! State du contenu du formulaire
  const [query, setQuery] = useState("");

  //! Gestion de la validation du formulaire
  const handleQuerySubmit = (event) => {
    //Désactivation du comportement par défaut
    event.preventDefault();

    //Envoi des données (state) vers le composant parent
    // La fonction "trim" supprime les espaces inutiles avant et après le texte
    onSearch(query.trim());

    //Reset du formulaire
    setQuery("");
  };

  //! Rendu
  return (
    <form onSubmit={handleQuerySubmit}>
      {labelContent && (
        //Label conditionnel : la balise est affichée au besoin
        <label htmlFor={formId}>{labelContent} : </label>
      )}

      {/*Résumé du binding*
                - value={...} : State -> Input (Si le state est modifié, l'input aussi)
                - onChange={...} : Input -> State (Modifie le state en fct de l'input) 
            */}

      <input
        id={formId}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchForm;
