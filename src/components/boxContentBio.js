import React from 'react'
import Box from '../components/box'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

export default function BoxContentBio () {
  const data = useStaticQuery(graphql`
  query {
      file(relativePath: { eq: "Bio-image.png"}) {
        childImageSharp {
            fluid(maxWidth:500) {
              ...GatsbyImageSharpFluid
            }
        }
      }
  }
`)
  return (
    <Box title='About Me'>
      <div className='flex flex-col items-center space-y-6'>
        <Img
          fluid={data.file.childImageSharp.fluid}
          fadeIn
          alt='Avatar du Docteur Alajami, créateur de Que dit vraiment le Coran?'
          className='w-32 h-32 rounded-full mr-4'
        />
        <h2 className='tracking-widest uppercase'>Dr Alajami</h2>
        <p className='text-xs text-gray-800 px-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget faucibus elit. Praesent aliquet risus ac odio bibendum, vitae laoreet nulla eleifend.
            Maecenas sed posuere massa. Donec ut cursus lorem. Curabitur cursus justo ultricies massa bibendum, non malesuada lectus semper. Vivamus eget lectus ac mauris rutrum interdum ultricies quis ligula.
            Proin sollicitudin ex augue, sit amet malesuada nulla dictum quis. Quisque eleifend dapibus sem, eu ullamcorper orci fermentum eu. Vestibulum malesuada posuere sodales.
            Etiam nec erat eu arcu dictum molestie scelerisque quis eros. Morbi ultricies massa non faucibus egestas.
        </p>
      </div>
    </Box>
  )
}
