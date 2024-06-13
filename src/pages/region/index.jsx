import RegionList from "@/components/RegionList/RegionList";
import Layout from "@/container/Layout/Layout";
import { getRegionAll } from "@/styles/services/region.service";


// ↓ Composant pré-rendu (avc si néc du code client)
const Region = ( { regionsProps }) => {

    // Si on écrit ici, on entre dans la logique CLIENT

    return (
        <Layout>
            <h1>Les régions</h1>
            <RegionList regions={regionsProps} />
        </Layout>
    );
};

// ↓ Méthode serveur qui permet d'injecter des données dans le composant
// Il est possibler d'utiliser "getStaticProps" ou "getServerSideProps"

// Pour cette page, on est en "SSG"
export const getStaticProps = async() => {

    //! Récupération des données nécessaires pour la page (via les services, fichier js region.service.js)
    const regionsFromService = await getRegionAll();

    //! La fonction "getStaticProps" doit renvoyer un objet JS
    return {
        // Injection des données au composant via ses props
        props: {
            regionsProps : regionsFromService
        }
    }

}

export default Region;