import React from 'react'
import Header from '../components/header'
import Jumbotron from './jumbotron'
import BioWidget from '../components/bioWidget'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function Layout ({ children }) {
  const data = useStaticQuery(graphql`
  query QueryWallpaperHome {
    contentfulAlbumCollection {
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
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
    <div className='container mx-auto font bg-white'>
      <Header />
      <Jumbotron />
      <div className='flex flex-wrap mt-8 mb-8 lg:max-h-xs'>
        <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:max-h-xs lg:m-0  mt-8'>
          <Img
            fluid={data.contentfulAlbumCollection.image.fluid}
            alt="Photo du Coran  de la page d'accueil du blog Alajami"
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-full lg:w-1/4 px-4'>
          <BioWidget />
        </div>
      </div>
      <div className='flex flex-wrap mt-8 mb-8 lg:max-h-xs'>
        {children}
      </div>
    </div>
  )
}
