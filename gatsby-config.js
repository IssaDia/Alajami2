const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') dotenv.config()

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-postcss`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,`@contentful/gatsby-transformer-contentful-richtext`,`gatsby-plugin-catch-links`,`gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pemf7z9toffw`,
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
    }]
}
