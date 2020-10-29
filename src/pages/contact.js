import React from 'react'
import Layout from '../components/organisms/layout'
import FormWidget from '../components/organisms/formWidget'
import LastsPostsWidget from '../components/organisms/lastsPostsWidget'

export default function Contact () {
  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 lg:m-0  mt-8'>
        <FormWidget />
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}
