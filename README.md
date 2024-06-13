# Demo Next JS (Page Router)

Cette démo a pour but de montrer le fonctionnement de NextJS (framework en React)

Il existe dexu types de router dans NextJS :
- Page
- App (orienté => composant Client + composant Serveur)

## Installation

Dans un terminal, entrer la cmd suivante : 
```
npm create next-app@latest
```

Options choisies pour la démo :
```
√ What is your project named? ................................ demo-next-js
√ Would you like to use TypeScript? ...........................No
√ Would you like to use ESLint? ...............................Yes
√ Would you like to use Tailwind CSS? ........................ No
√ Would you like to use `src/` directory? .................... Yes
√ Would you like to use App Router? (recommended) ............ No
√ Would you like to customize the default import alias (@/*)? . No
```


## Objectifs de Next JS

- Meilleur référencement du site (SEO)
- Application moins lourde pour le client (évite de faire ramer vieux PC pas performants)
- Page pré-rendu => génère déjà html et injecte js manquant par la suite


## Routeur Page VS Routeur App

### Page


- Pré-génération des pages
    - Rendu mémorisé
        - SSG (Static Site Generation) -> le site génère des pages statiques 1 seule fois
        - ISR (Incremental Static Regeneration)
    - Sur demande
        - SSR (Server-Side Rendering) -> idem que premier, mais fait à la demande

- Proxy API intégré
    - Permet de consommer des APIs avec des clés cachées via le serveur Next JS

- Fonctionnalité React CSR (Client-Side Rendering)
    - Intéraction avec l'utilisateur _(onClick)_
    - Utilisation des hooks
    -    Mise en place d'un state management (Redux, Recoil, Jotai, ...) identique

- Fonctionnement du routing

### App
- Deux «types» de composant
    - Client _(Annotation "use client" en début de fichier)_
    - Serveur

- Proxy API intégré
    - Permet de consommer des API avec des clés cachées via Next JS
    - Plus de fonctionnalités

- Fonctionnalité React - Composant Client
    - Intéraction avec l'utilisateur _(onClick)_
    - Utilisation des hooks
    - Possibilité d'utiliser un state management (Redux, Recoil, Jotai,...) entre composants Client

- Fonctionnalité React - Composant Serveur
    - Pas d'event client
    - Pas de hook
    - Logique «backend» _(Exécuté depuis le serveur)_
        - Consommer une API/ une database
        - Variable privée _(Clé d'API par exemple)_
    -Seul le rendu final est envoyé au client

- Fonctionnement du routing
    - Le contenu du dossier «app» est exposé
    - Les composants sont accessibles, en fonction de leur nom via une convention de nommage.
      Page.jsx / Loading.jsx


## Structure de la démo
Le site sera constitué des pages suivantes :

```
/                       : Page d'accueil
/region                 : Page sur les régions (Listing)
/region/:id             : Page détails d'une région
/pokemon                : Page sur les Pokémons (qq liens vers des Pokémons)
/pokemon/:id            : Page détails d'un Pokémon (via la PokéAPI)
/about                  : Page d'info avec un formulaire
```

La structure de fichier du dossier «page» sera donc :
```
/index.jsx            /
region
    index.jsx         /region
    [id].jsx          /region/42
pokemon
    index.jsx         /pokemon
    [id].jsx          /pokemon/42
about
    about.jsx         /about
```

## Fonctionnement du pré-rendu avec Next JS (Page)

Plusieurs types de pré-rendu possible :

- SSG (Static Site Generation) :
    
    _→ Génération durant le build_
    \
    Celle-ci peut nécessiter des données externes
    \
    _Exemple : Page About_
- ISR (Incremental Static Regeneration)
    
    _→ Même fonctionnement que SSG, mais peut regénérer les pages_
    \
    Regénérations possibles : via un timer ou à la demande
    

    _Exemple : Page détail d'élément (qui ne doit pas être regénéré), page d'un blog, etc._
- SSR (Server Side Rendering)
    
    _→ Génération de page à la suite d'une requête. Sans sauvegarder le rendu_
    \
    _Exemple : Page de profil_

Fonctionnement du choix de type de rendu :
- Si le composant «page» est seul (sans méthode annexe) => **SSG**

- Si la page a besoin de données (via DB, API, JSON)
    - Via la méthode "getStaticProps" => **SSG**
    - Via les méthodes "getStaticProps" et "getStaticPaths" => **SSG** et **ISR**
    - Via la méthode "getServersSideProps" => **SSR**


Pour définir que la page est en ISR (et non en SSG), il faut ajouter la propriété "revalidate' à 'getStaticProps'


Peu importe le type de pré-rendu choisi, il est toujours possible d'ajouter du code 'client' dans les pages. Ce qui permet de la rendre dynamique pour l'utilisateur.

_Remarque: durant le dev, toutes les pages sont en  SSR !!!_