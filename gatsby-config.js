const dotenv = require('dotenv')
require('dotenv').config()

if (process.env.NODE_ENV !== 'production') dotenv.config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Que dit vraiment le Coran du Dr Alajami'
  },
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,`@contentful/gatsby-transformer-contentful-richtext`,`gatsby-plugin-catch-links`,`gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require('./src/utils/algolia-queries')
      }
    }
  ]
}
