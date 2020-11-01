import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/organisms/layout'
import Box from '../components/atoms/box'
import LastsPostsWidget from '../components/organisms/lastsPostsWidget'
import SingleThemeCard from '../components/organisms/single-theme-card'
import Pagination from '../components/organisms/pagination'

export default function ThemeTemplate ({ data, pageContext }) {
  const { previousPagePath, nextPagePath } = pageContext
  const singleThemeData = data.allContentfulBlogPost.edges.map(({ node }) => {
    return <SingleThemeCard key={node.title} title={node.title} theme={data.contentfulBlogCategories.title} content={node.body.childMarkdownRemark.excerpt} slug={node.slug} />
  })

  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:m-0 m-8 '>
        <Box title={data.contentfulBlogCategories.title}>
          <div className='grid grid-cols-2 gap-4 p-16'>{singleThemeData}</div>
          <Pagination previousPagePath={previousPagePath} nextPagePath={nextPagePath} />
        </Box>
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}

export const data = graphql`
query ($slug: String!, $skip: Int! = 0) {
  allContentfulBlogPost(filter: {postCategory: {slug: {eq: $slug}}},limit: 1, skip: $skip) {
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

ThemeTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}
