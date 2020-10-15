const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') dotenv.config()

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pemf7z9toffw`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/images/`
      }
    }]
}
