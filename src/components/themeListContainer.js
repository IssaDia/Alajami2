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

  const themedCards = data.allContentfulBlogCategories.edges.map(({ node }) => {
    return <div className='px-4 py-2 m-2' key={node.title}><ThemeCard title={node.title} slug={node.slug}>{node.title}</ThemeCard></div>
  })
  return (
    <div className='h-64 flex flex-row px-16 mx-4'>
      {themedCards}
    </div>
  )
}
