import React from 'react'
import Layout from '../components/layout'
import LastsPostsWidget from '../components/lastsPostsWidget'
import SearchComp from '../components/search/searchComp'

export default function Search () {
  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 lg:m-0  mt-8'>
        <SearchComp />
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}
