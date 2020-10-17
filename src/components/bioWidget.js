import React from 'react'
import Box from './box'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function BioWidget () {
  const data = useStaticQuery(graphql`
  query getCreatorInfo {
    contentfulBlogCreator {
      nom
      titre
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
        file {
          url
        }
      }
    }
    contentfulBlogCreatorBioTextNode {
      bio
    }
  }
`)

  return (
    <Box title='About Me'>
      <div className='flex flex-col items-center space-y-6'>
        <Img
          fluid={data.contentfulBlogCreator.image.fluid}
          alt='Avatar du Docteur Alajami, créateur de Que dit vraiment le Coran?'
          className='w-32 h-32 rounded-full'
        />
        <h2 className='tracking-widest uppercase'>{data.contentfulBlogCreator.titre} {data.contentfulBlogCreator.nom}</h2>
        <p className='text-xs text-gray-800 px-8 italic text-center pb-6'>{data.contentfulBlogCreatorBioTextNode.bio}</p>
      </div>
    </Box>
  )
}
