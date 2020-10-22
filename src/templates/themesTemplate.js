import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/box'
import ThemesCard from '../components/themes-Card'
import LastsPostsWidget from '../components/lastsPostsWidget'
import Pagination from '../components/pagination'

export default function ThemesTemplate ({ data, pageContext }) {
  const { currentPage, numPages } = pageContext
  const themesData = data.allContentfulBlogCategories.edges.map(
    ({ node }) => {
      return (
        <ThemesCard key={node.title} title={node.title} slug={node.slug}>
          {node.title}
        </ThemesCard>
      )
    }
  )
  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:max-h-xs lg:m-0 mt-8'>
        <Box title='Themes'>
          <div className='grid grid-rows-3 grid-flow-col gap-4 mt-16'>
            {themesData}
          </div>
          <Pagination currentPage={currentPage} numPages={numPages} />
        </Box>
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}

export const data = graphql`
  query BlogCategories($skip: Int! = 0) {
    allContentfulBlogCategories(limit: 6, skip: $skip) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
