
import React from 'react'
import Layout from '../components/layout'
import SinglePost from '../components/singlePost'
import LastsPostsWidget from '../components/lastsPostsWidget'
import { graphql, Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function SinglePostTemplate ({ data, pageContext }) {
  const prev = pageContext.prev ? {
    url: `/themes/${data.contentfulBlogPost.postCategory.slug}/${pageContext.prev.slug}`,
    title: pageContext.prev.title
  } : null
  const next = pageContext.next ? {
    url: `/themes/${data.contentfulBlogPost.postCategory.slug}/${pageContext.next.slug}`,
    title: pageContext.next.title
  } : null
  console.log(pageContext)
  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:m-0  mt-8'>
        <SinglePost title={data.contentfulBlogPost.title} content={data.contentfulBlogPost.body.childMarkdownRemark.html} />
        <div className='text-xs'>
          <div className='float-left arrow-link-container my-8'>
            {prev && (
              <>
                <Link to={prev.url} className='flex flex-wrap space-x-2'>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span className='arrow-link-text'>{prev.title}</span>
                </Link>
              </>
            )}
          </div>
          <div className='float-right arrow-link-container my-8'>
            {next && (
              <>
                <Link to={next.url} className='flex flex-wrap space-x-2'>
                  <span className='arrow-link-text'>{next.title}</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </>
            )}
          </div>
        </div>
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
