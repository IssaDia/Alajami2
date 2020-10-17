import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/box'

export default function ThemeTemplate ({ data }) {
  const themeCards = data.allContentfulBlogPost.edges.map(({ node }) => {
    return <h1 key={node.title}>{node.title}</h1>
  })
  return (
    <Layout>
      <Box title='Themes'>
        <div className='h-64 flex flex-row px-16 mx-4'>{themeCards}</div>
      </Box>
    </Layout>
  )
}

export const data = graphql`
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
