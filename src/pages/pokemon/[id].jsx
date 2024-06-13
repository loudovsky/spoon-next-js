import Layout from "@/container/Layout/Layout";
import { getPokemonById } from "@/styles/services/pokemon.service";


const PokemonDetail = ({pokemon}) => {

    return (
        <Layout>
            <h1>{pokemon.name.fr} / {pokemon.name.en}</h1>
            <h2>{pokemon.genus}</h2>
        </Layout>
    );
};

// Définition des routes possibles pour le rendu statique
export const getStaticPaths = async () => {

    //! Définir les différentes valeurs de route possible
    //? On définit uniquement la route pour Pikachu (id: 25)
    const pathsPoke = [
        { params: { id: '25'}}
    ];

    //! Envoi un objet JS qui indique les routes possibles et les options
    return {
        paths: pathsPoke,
        fallback: 'blocking'  // Est-ce qu'il doit générer les pages à la volée (→ Oui! on bloque le système le temps que la future page soit générée)
    }

}

//Permet de faire du pré-rendu statique
export const getStaticProps = async ( { params } ) => {


    //! 1) Récupération du paramètre "id" de la route
    const id = parseInt(params.id);

    //! 2)
    const pokemonFromService = await getPokemonById(id); 

    //! si aucune donnée n'est récupérée => Page 404
    if(!pokemonFromService) {
        //? Envoi un objet JS qui indique une erreur "404 not found" 
        return {
            notFound: true
        };
    }

    //! 3) Envoi d'un objet JS avec les données nécessaires à la page (props)
    return {
        props : {
            pokemon : pokemonFromService
        }
    } 
}

export default PokemonDetail;