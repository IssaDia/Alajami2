#### 08/10

-> Veille techno sur la technologie à utiliser pour le blog Alajami

-> Choix d'associer Gatsby et Contentful

-> Découverte et installation de Gatsby (via la documentation)

-> Découverte et installation de Tailwind CSS

-> Création d'un Layout

-> Choix d'un template pour le blog

#### 09/10

-> Prise en main Tailwindcss (doc + tutoriel)

-> Navbar Responsive Ok

#### 10/10

-> Jumbotron Ok

-> Découverte librairie React-slick pour Carousel

-> Carousel Ok

### 11/10

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

### 12/10

-> Découverte Contentful (doc)

-> Intégration de Contenful au projet (configuration + login avec Api Keys)

-> Paramétrage des content model à partir de l'interface Contenful (profil créateur, articles)

-> Début entrées données relatives au blog

-> Utilisation de l'API Contentful pour créer une requete GraphQl

-> Intégration d'une 1ére requête GraphQl sur l'application Gatsby

-> Découverte de ResponsiveApp qui permet d'afficher un visuel de son application sur différents appareils

### 13/10

-> Travail sur le Grid de l'application via Tailwind Css

-> Récupération d'un texte en markdown et le convertir en Html par le biais d'un parser

-> Installation d'un parser : choix de Marked

    issue ; TypeError: Object(...) is not a function

    resolved : mettr marked au lieu de { marked } quand je fais l'import de la librairie (via stackoverflwow)

### 14/10

-> Recherche sur les relations entre les différentes collections (doc Contentful)

    remarque : toujours faire  le modéle des données en amont même si le NoSql permet une plus grande liberté de modulation

-> Création d'articles et de leurs catégories via la plateforme Contenful

-> Affichage de Crads avec les différents thémes d'articles

-> Création de routes dynamiques (doc Gatsby)

### 15/10

-> Créer un fichier .env avec mes paramétres de connexion à Contentful (avec la librairie DotEnv)

    remarque : y penser au démarrage du projet

-> A considérer : rich text contenful plugin

-> Requête pour récupérer tous les articles d'un même théme

    issue : Variable "$slug" of required type "String!" was not provided

    resolved : StaticQuery n'est pas geré avec des arguments dans Gatsby

    issue 2 : still Variable "$slug" of required type "String!" was not provided

    resolved : placer le composant requis dans template et non dans pages pour que le contexte ( le slug ici) puisse être passé dans context

### 17/10

-> Construction de la query permettant de récupérer les derniers articles pour le widget de la page d'accueil

-> Utilisation d'un plugin Contentful pour transformer Rich Text en Html

-> Réorganisation du layout

### 18/10

-> Pagination pour la liste des différents thémes du blog ( via documentation

### 19/10

issue : e GraphQL query in the non-page component "/opt/lampp/htdocs/gatsby/alajami/src/templates/themeTemplate.js" will not be run.

resolved : mettre les creations de page dans une seule et même fonction

-> Installation du plugin Catch Links de Gatsby pour permettre de ne pas recharger les pages externes

-> Récupération des données des articles dont le titre et un extrait (par l'utilisation du plugin gatsby-transformer-remark)

### 22/10

-> Amélioration Css Cards

### 23/10

-> Création du footer

-> Utilisation d'un Wrapped Component pour avoir accés aux derniers posts dans un widget et dans le footer

### 24/10

-> Travail sur l'adaptation d'un script permettant de récupérer des données à partir de l'api Wordpress

    issue : error 403 Acess denied

    not solved

### 26/10

-> Travail sur le css des Cards des différents articles

-> Mise en place de la pagination des pages d'articles

### 27/10

-> Découverte d'Algolia pour la mise en place d'une barre de recherche (via doc)

-> création et paramétrage d'Algolia

### 28/10

-> Indexation de chaque article sur l'interface d'Agolia via son Api et un script node

-> Installation de la librairie InstantSearch pour gérer les recherches sur l'api Algolia

-> Mise en place de le barre de recherche

### 29/10

-> Réorganisation avec l'Atomic Design découvert la veille sur Médium

-> Création du formulaire de contact avec Formik et Yup

### 30/10

issue : impossible de soumettre le formulaire de contact

resolved: soumission du formulaire ok apré correction d'une erreur de validation Yup

### 31/10

-> Ajustements du serveur crée avec node pour reçevoir des mails du formulaire de contact

issue: variables d'nevironnements non disponible dans le script

solved: mettre le script à la racine avec le fichier .ENV

-> Envoi de mails du formulaire de contact sur l'adresse Gmail Ok

### 01/11

-> Installation de la librairie prop-types et mise en place de Proptypes

### 02/11

-> Adaptation du script permettant de récupérer des articles du site wordpress sur Contentful

### 05/11

-> installation des outils pour tester mon application : React testing-library et Jest

-> Réorganisation de l'atomic design

issue : path.startsWith is not a function

resolved: faire attention à la déstructuration des props dans les composants

## 18/11

-> Travail sur la documentation du projet sur Git

## 19/11

-> Veille sur les linter
-> Rédaction de 2 posts sur ESlint et Prettier
-> Utilisation de ESLint et Prettier sur le Projet via le module gatsby dedié

    issue : les semi-colons restente affichés pendant mon formattage on save
    utilisation de la commande git reset --hard HEAD pour revenir au commit précédent afin de reprendre l'installation du module à zéro
    solved : résolu en suivant le tuto du module gatsby et les posts de mon notion
