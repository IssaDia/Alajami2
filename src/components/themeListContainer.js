import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ThemeCard from './themeCard'

export default function ThemeListContainer () {
  const data = useStaticQuery(graphql`
  query BlogCategories {
    allContentfulBlogCategories {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
  `)

  const themedCards = data.allContentfulBlogCategories.edges.map(({ node, index }) => {
    return <ThemeCard key={node.title} title={node.title} slug={node.slug}>{node.title}</ThemeCard>
  })
  return (
    <div className='flex flex-wrap -mx-1 lg:-mx-4'>
      {themedCards}
    </div>
  )
}
