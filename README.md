
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

->Carousel Ok

## 11/10

->création d'un container pour différentes box

->Recherche sur la performance de rapidité d'affichage d'une image sur Gratsby (tutoriel Youtube)

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
