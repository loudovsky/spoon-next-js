import PokemonData from "@/data/pokemon.json";



// Ce service va contenir toutes les méthodes pour interagir avec les données.
// Celui-ci permet d'isoler la logique pour accéder aux données (db, API, JSON,...)

export const getRegionCount = async () => {
    return PokemonData.regions.length;
}

export const getRegionAll = async () => {
    return PokemonData.regions;
}

export const getRegionById = async (id) => {
    
    //! Méthode 'find' : permet d'obtenir un élément d'une collection via un prédicat
    //!                                  (prédicat = fct qui renvoie une valeur booléenne)
    //!                                  Si l'élément (la région) n'est pas trouvé, la fct renvoie 'undefined'
    
    //? Explication du prédicat :
    // Pour chaque région, compare l'id de la région avec l'id reçu en paramètre

    return PokemonData.regions.find(region => region.id === id);
    
} 
