import Layout from "@/container/Layout/Layout";
import { getRegionAll, getRegionById } from "@/styles/services/region.service";


const RegionDetail = ({ region }) => {
    return (
        <Layout>
            <h1>{region.name}</h1>
            <h2>Génération : {region.generation}</h2>
            <p>{region.description}</p>
        </Layout>
    );
};

// Méthode pour définir les paramètres sur une route dynamique en SSG
export const getStaticPaths = async () => {

    //! Définir les différentes valeurs de route d'id qui seront reçues par 'params'
    // NDLR : utilisé au début comme démo, mais ne cible que les 3 premiers id, fastidieux car on devrait écrire une ligne pour chaque id => on choisit la méthode reprise dans 'const pathsRegion'
    const pathsDemo = [
        { params: { id: '1' }}, //* /region/1
        { params: { id: '2' }}, //* /region/2
        { params: { id: '3' }}, //* /region/3
    ];


    //? Exploiter les données (via le service) pour construire l'objet "paths"
    //* Récupération de données via le service
    const regions = await getRegionAll();

    //* Construit l'objet "paths" via la fonction map et les données reçues
    //                                 ↓ pour chaque région que j'ai, je renvoie un objet...
    const pathsRegion = regions.map(region => {
        return {
            params: { id: region.id.toString() }
        }
    });


    //! Envoie un objet JS qui indique les routes possibles et les options
    return {
        paths: pathsRegion,   // les routes possibles
        fallback: false     // Est-ce qu'il doit générer les pages à la volée (→non, je renvois direct 404 error)
    }
}

// Méthode serveur qui permet d'injecter des données dans le composant "page"
export const getStaticProps = async ({ params }) => {

    //! Obtenir le paramètre de la route
    // => le nom du paramètre est défini par le nom du fichier via les [].
    const id = parseInt(params.id);


    //! Récupérer la région de l'id fourni par la route '/region/2'
    const regionFromService = await getRegionById(id);

    //! Envoyer un objet JS avec les données nécessaires à la page (props)
    return {
        props : {
            region: regionFromService
        }
    }
}

export default RegionDetail;