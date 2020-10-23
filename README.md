
Blog Alajami (Gatsby and Contentful)

A faire : pages next,previous sur chaque article

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

## 15/10

-> Créer un fichier .env avec mes paramétres de connexion à Contentful (avec la librairie DotEnv)

    remarque : y penser au démarrage du projet

-> A considérer : rich text contenful plugin

-> Requête pour récupérer tous les articles d'un même théme 

    issue : Variable "$slug" of required type "String!" was not provided

    resolved : StaticQuery n'est pas geré avec des arguments dans Gatsby

    issue 2 : still Variable "$slug" of required type "String!" was not provided

    resolved : placer le composant requis dans template et non dans pages pour que le contexte ( le sug ici) puisse être passé dans context

## 17/10

-> Construction de la query permettant de récupérer les derniers articles pour le widget de la page d'accueil

-> Utilisation d'un plugin Contentful pour transformer Rich Text en Html

-> Réorganisation du layout


## 18/10

-> Pagination pour la liste des différents thémes du blog ( via documentation

## 19/10

  issue : e GraphQL query in the non-page component "/opt/lampp/htdocs/gatsby/alajami/src/templates/themeTemplate.js" will not be run.

  resolved : mettre les creations de page dans une seule et même fonction

-> Installation du plugin Catch Links de Gatsby pour permettre de ne pas recharger les pages externes

-> Récupération des données des articles dont le titre et un extrait (par l'utilisation du plugin gatsby-transformer-remark)

## 22/10

-> Amélioration Css Cards

## 23/10

-> Création du footer

-> Utilisation d'un Wrapped Component pour avoir accés aux derniers posts dans un widget et dans le footer

