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

  data.allContentfulBlogCategories.edges.forEach(edge => {
    const slug = edge.node.slug
    createPage({
      path: '/themes/' + slug,
      component: themeTemplate,
      context: { slug: slug }
    })
  })

  const posts = data.allContentfulBlogPost.edges

  posts.forEach(({ node }, index) => {
    const slug = node.slug
    const title = node.title
    const prev = index === 0 ? null : posts[index - 1].node
    const next = index === (posts.length - 1) ? null : posts[index + 1].node
    const test = posts[index]
    console.log(prev)
    const categorySlug = node.postCategory.slug
    createPage({
      path: '/themes/' + categorySlug + '/' + slug,
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
  const postsData = result.data.allContentfulBlogCategories.edges
  const postsPerPage = 6
  const numPages = Math.ceil(postsData.length / postsPerPage)
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
