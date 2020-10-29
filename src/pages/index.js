import React from 'react'
import Layout from '../components/organisms/layout'
import IntroductionPost from '../components/organisms/IntroductionPost'
import LastsPostsWidget from '../components/organisms/lastsPostsWidget'
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
      <div className='w-full lg:w-3/4 lg:px-4 lg:m-0  mt-8'>
        <IntroductionPost title={data.contentfulBlogIntroduction.title} content={data.contentfulBlogIntroduction.text.childContentfulRichText.html} />
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}
