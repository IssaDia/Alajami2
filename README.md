
Blog Alajami (Gatsby and Contentful)

## 08/10

-> Veille techno sur la technologie à utiliser pour le blog Alajami

-> Choix d'associer Gatsby et Contentful

-> Découverte et installation de Gatsby (via la documentation)

-> Découverte et installation de Tailwind CSS

-> Création d'un Layout

-> Choix d'un template pour le blog

## 09/10

-> Prise en main Tailwindcss (doc + tutoriel) 

-> Navbar Responsive Ok

## 10/10

-> Jumbotron Ok

-> Découverte librairie React-slick pour Carousel

-> Carousel Ok

## 11/10

-> Création d'un container pour différentes box

-> Recherche sur la performance de rapidité d'affichage d'une image sur Gratsby (tutoriel Youtube)

-> Choix et installation de Gatsby-image

    issue : 
    Error in "/opt/lampp/htdocs/gatsby/alajami/node_modules/gatsby-plugin-sharp/gatsby-node.js":
    Something went wrong installing the "sharp" module
    Cannot find module '../build/Release/sharp.node'

    solved : 

    here steps to resolve this issue (via Github):

    Delete node_modules folder
    Clear npm cache npm cache clean --force
    (Optional) upgrade npm packages npm install npm@latest -g
    Re-install packages by running `npm install'
    Try again to run gatsby develop on your terminal/cmd. Good luck and happy coding again

->Affichage d'une image responsive

## 12/10 

-> Découverte Contentful (doc)

-> Intégration de Contenful au projet (configuration + login avec Api Keys)

-> Paramétrage des content model à partir de l'interface Contenful (profil créateur, articles)

-> Début entrées données relatives au blog

-> Utilisation de l'API Contentful pour créer une requete GraphQl

-> Intégration d'une 1ére requête GraphQl sur l'application Gatsby

-> Découverte de ResponsiveApp qui permet d'afficher un visuel de son application sur différents appareils

## 13/10

-> Travail sur le Grid de l'application via Tailwind Css

-> Récupération d'un texte en markdown et le convertir en Html par le biais d'un parser 

-> Installation d'un parser : choix de Marked

    issue ; TypeError: Object(...) is not a function

    resolved : mettr marked au lieu de { marked } quand je fais l'import de la librairie (via stackoverflwow)

## 14/10

-> Recherche sur les relations entre les différentes collections (doc Contentful)

    remarque : toujours faire  le modéle des données en amont même si le NoSql permet une plus grande liberté de modulation
    
-> Création d'articles et de leurs catégories via la plateforme Contenful

-> Affichage de Crads avec les différents thémes d'articles

-> Création de routes dynamiques (doc Gatsby)