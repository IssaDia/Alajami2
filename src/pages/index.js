import React from 'react'
import BoxContentBio from '../components/boxContentBio'
import Carousel from '../components/carousel'
import Layout from '../components/layout'

export default function Home () {
  return (
    <Layout>
      <div className='flex flex-row h-60 pt-10'>
        <div className='w-8/12 px-8 mx-0'>
          <Carousel />
        </div>
        <div className='w-4/12 px-4'>
          <BoxContentBio />
        </div>
      </div>
    </Layout>
  )
}
