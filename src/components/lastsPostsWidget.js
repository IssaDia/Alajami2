import React from 'react'
import Box from './box'
import { useStaticQuery, graphql } from 'gatsby'

export default function BioWidget () {
  const data = useStaticQuery(graphql`
  query LastsPosts {
    allContentfulBlogPost(filter: {}, limit: 2, sort: {fields: publishDate, order: DESC}) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`)

  const lastsPosts = data.allContentfulBlogPost.edges.map(({ node, index }) => {
    return <h3 className='text-xs' key={index}> {node.title}</h3>
  })

  return (
    <Box title='Articles Récents'>
      <div className='flex flex-col items-center space-y-6'>
        {lastsPosts}
      </div>
    </Box>
  )
}
