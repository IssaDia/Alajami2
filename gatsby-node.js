exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  query  {
    allContentfulBlogCategories {
      edges {
        node {
          slug
        }
      }
    }
  }
`)
  data.allContentfulBlogCategories.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: '/themes/' + slug,
      component: require.resolve('./src/templates/themeTemplate.js'),
      context: { slug: slug }
    })
  })
}
