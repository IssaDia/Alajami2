
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const themeTemplate = path.resolve('./src/templates/themeTemplate.js')
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
          slug
          postCategory {
            slug
          }
        }
      }
    }
  }
`)

  data.allContentfulBlogCategories.edges.forEach(edge => {
    const slug = edge.node.slug
    createPage({
      path: '/themes/' + slug,
      component: themeTemplate,
      context: { slug: slug }
    })
  })

  data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    const categorySlug = edge.node.postCategory.slug
    createPage({
      path: '/themes/' + categorySlug + '/' + slug,
      component: postTemplate,
      context: { slug: slug }
    })
  })

  const result = await graphql(
    `
      {
        allContentfulBlogCategories {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  // ...

  // Create blog-list pages
  const posts = result.data.allContentfulBlogCategories.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/themes' : `/themes/${i + 1}`,
      component: path.resolve('./src/templates/themesTemplate.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
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
