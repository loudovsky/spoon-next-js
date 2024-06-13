//? Le composant « App »
  // - Permet d'ajouter un CSS global
  //! - Englobe toutes les autres pages
  // - Permet d'injecter des données (via les props)

// L'import commençant par "@/..." permet de définir le chemin
// en partant du dossier «src» de notre projet

import "@/styles/globals.css";
import Head from "next/head";
import { Roboto } from "next/font/google";

//Gestion de «Font» optimisé par Next
// 
const roboto = Roboto({ subsets: ["latin"], weight:'300' })

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
        <title>Demo Next JS</title>
        <meta name="description" content="Formation Front-End BXL2024" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type='image/gif' href="/pokeball.gif" />
    </Head>
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
    </>
  );  
};
