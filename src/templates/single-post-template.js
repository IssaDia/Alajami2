import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/organisms/layout'
import SinglePost from '../components/organisms/singlePost'
import LastsPostsWidget from '../components/organisms/lastsPostsWidget'
import { graphql } from 'gatsby'

export default function SinglePostTemplate({ data, pageContext }) {
  return (
    <Layout>
      <div className="w-full lg:w-3/4 lg:px-4 sm:h-42 lg:m-0  mt-8">
        <SinglePost
          title={data.contentfulBlogPost.title}
          content={data.contentfulBlogPost.body.childMarkdownRemark.html}
          pageContext={pageContext}
          categorySlug={data.contentfulBlogPost.postCategory.slug}
        />{' '}
      </div>{' '}
      <div className="w-full lg:w-1/4 px-4">
        <LastsPostsWidget />
      </div>{' '}
    </Layout>
  )
}
export const data = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      postCategory {
        slug
      }
    }
  }
`

SinglePostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}
