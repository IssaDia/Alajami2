import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
const { StaticQuery, graphql } = require('gatsby')

function getBio (WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
      query bioData {
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
    `}
      render={data => <WrappedComponent {...props} bio={data} />}
    />
  )
}

export const BioTitle = getBio(props => (
  <p className='tracking-widest uppercase'>{props.bio.contentfulBlogCreator.titre} {props.bio.contentfulBlogCreator.nom}</p>
))

export const BioImage = getBio(props => (
  <Img fluid={props.bio.contentfulBlogCreator.image.fluid} alt='Avatar du Docteur Alajami, créateur de Que dit vraiment le Coran?' className='w-32 h-32 rounded-full' />
)
)

export const BioDescription = getBio(props => (
  <p className=''>{props.bio.contentfulBlogCreatorBioTextNode.bio}</p>
)
)

getBio.propTypes = {
  WrappedComponent: PropTypes.func
}
