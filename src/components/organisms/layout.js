import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Jumbotron from './jumbotron'
import BioWidget from './bioWidget'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'

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
    <>
      <div className='container-fluid mx-auto flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1'>
          <Jumbotron />
          <div className='flex flex-wrap mt-8 mb-8 lg:max-h-xs'>
            <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:max-h-xs lg:m-0  mt-8 animate__animated animate__fadeInLeft'>
              <Img
                fluid={data.contentfulAlbumCollection.image.fluid}
                alt="Photo du Coran  de la page d'accueil du blog Alajami"
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full lg:w-1/4 px-4 animate__animated animate__fadeInRight'>
              <BioWidget />
            </div>
          </div>
          <div className='flex flex-wrap mt-8 mb-8'>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
}
