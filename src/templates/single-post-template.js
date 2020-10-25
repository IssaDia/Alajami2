
import React from 'react'
import Layout from '../components/layout'
import SinglePost from '../components/singlePost'
import LastsPostsWidget from '../components/lastsPostsWidget'
import { graphql } from 'gatsby'

export default function SinglePostTemplate ({ data, pageContext }) {
  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:m-0  mt-8'>
        <SinglePost title={data.contentfulBlogPost.title} content={data.contentfulBlogPost.body.childMarkdownRemark.html} pageContext={pageContext} categorySlug={data.contentfulBlogPost.postCategory.slug} />
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}

export const data = graphql`
query ($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
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
