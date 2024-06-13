import Header from "../Header/header";

// Composant avec children (Délégation de contenu)
// Utilisation : <Layout> ... </Layout>
//                         ↑



//           JSX qui sera envoyé dans la props «children»
const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout;