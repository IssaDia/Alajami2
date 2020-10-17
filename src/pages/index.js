import React from 'react'
import Layout from '../components/layout'
import SinglePost from '../components/singlePost'
import LastsPostsWidget from '../components/lastsPostsWidget'
import { useStaticQuery, graphql } from 'gatsby'

export default function Home () {
  const data = useStaticQuery(graphql`
  query TextIntroduction {
    contentfulBlogIntroduction {
      title
      text {
        childContentfulRichText {
          html
        }
      }
    }
  }
`)

  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:max-h-xs lg:m-0  mt-8'>
        <SinglePost title={data.contentfulBlogIntroduction.title} content={data.contentfulBlogIntroduction.text.childContentfulRichText.html} />
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}
