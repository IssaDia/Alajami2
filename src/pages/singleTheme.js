import React from 'react'
import { graphql } from 'gatsby'

export default function SingleTheme () {
  const data = graphql`
    query ($slug: String!) {
        allContentfulBlogPost(filter: {postCategory: {slug: {eq: $slug}}}) {
            edges {
              node {
                title
                body {
                  body
                }
              }
            }
          }
    }
  `
  const themedCards = data.allContentfulBlogPost.edges.map(({ node }) => {
    return <h1 key={node.title}>{node.title}</h1>
  })
  return (
    <div className='h-64 flex flex-row px-16 mx-4'>
      {themedCards}
    </div>
  )
}
