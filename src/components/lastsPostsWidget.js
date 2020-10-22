import React from 'react'
import Box from './box'
import { useStaticQuery, graphql, Link } from 'gatsby'

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

  const lastsPosts = data.allContentfulBlogPost.edges.map(({ node }) => {
    return <Link to={node.slug} key={node.title}><li className='text-xs'>{node.title}</li></Link>
  })

  return (
    <Box title='Articles Récents'>
      <ul className='flex flex-col items-center space-y-6 list-disc'>
        {lastsPosts}
      </ul>
    </Box>
  )
}
