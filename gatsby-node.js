const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/single-post-template.js')
  const { data } = await graphql(`
  query  {
    allContentfulBlogCategories {
      edges {
        node {
          slug
        }
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          postCategory {
            slug
          }
        }
      }
    }
  }
`)

  if (data.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  const categories = data.allContentfulBlogCategories.edges
  const posts = data.allContentfulBlogPost.edges

  categories.forEach(edge => {
    const slug = edge.node.slug
    paginate({
      createPage,
      items: posts,
      itemsPerPage: 1,
      pathPrefix: '/theme/' + slug,
      component: path.resolve('./src/templates/themeTemplate.js'),
      context: {
        slug
        // other stuff
      }
    })
  })

  paginate({
    createPage,
    items: categories,
    itemsPerPage: 6,
    pathPrefix: '/themes',
    component: path.resolve('./src/templates/themesTemplate.js')
  })

  posts.forEach(({ node }, index) => {
    const slug = node.slug
    const title = node.title
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === (posts.length - 1) ? null : posts[index + 1].node
    const test = posts[index]
    console.log(prev)
    const categorySlug = node.postCategory.slug
    createPage({
      path: '/theme/' + categorySlug + '/' + slug,
      component: postTemplate,
      context: {
        slug,
        title,
        test,
        prev,
        next
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}
