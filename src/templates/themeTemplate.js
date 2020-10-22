import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/box'
import LastsPostsWidget from '../components/lastsPostsWidget'
import SingleThemeCard from '../components/single-theme-card'

export default function ThemeTemplate ({ data }) {
  const singleThemeData = data.allContentfulBlogPost.edges.map(({ node }) => {
    return <SingleThemeCard key={node.title} title={node.title} theme={data.contentfulBlogCategories.title} content={node.body.childMarkdownRemark.excerpt} slug={node.slug} />
  })

  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:max-h-xs lg:m-0 mt-8'>
        <Box title={data.contentfulBlogCategories.title}>
          <div className='h-64 flex flex-row px-8'>{singleThemeData}</div>
        </Box>
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}

export const data = graphql`
query ($slug: String!) {
    allContentfulBlogPost(filter: {postCategory: {slug: {eq: $slug}}}) {
        edges {
          node {
            title
            slug
            body {
              childMarkdownRemark {
                excerpt
              }
            }
          }
        }
      }
    contentfulBlogCategories(slug: {eq: $slug}) {
      title
    }
}
`
