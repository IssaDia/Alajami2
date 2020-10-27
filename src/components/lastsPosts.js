import React from 'react'
const { StaticQuery, graphql, Link } = require('gatsby')

function getLastPosts (WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query LastsPosts {
            allContentfulBlogPost(filter: {}, limit: 2, sort: {fields: publishDate, order: DESC}) {
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
        `}
      render={data => <WrappedComponent {...props} lastsPosts={data} />}
    />
  )
}

export const LastPosts = getLastPosts(props => (
  props.lastsPosts.allContentfulBlogPost.edges.map(({ node }) => {
    return <Link to={`/theme/${node.postCategory.slug}/${node.slug}`} key={node.title}><li className='text-xs'>{node.title}</li></Link>
  })
)
)

export const LastPostsFooter = getLastPosts(props => (
  props.lastsPosts.allContentfulBlogPost.edges.map(({ node }) => {
    return <Link to={`/theme/${node.postCategory.slug}/${node.slug}`} key={node.title}><li className='text-xs text-gray-800 hover:text-white'>{node.title}</li></Link>
  })
)
)
