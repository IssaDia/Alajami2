import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default function SingleTheme () {
    const data = useStaticQuery(graphql`
    query getCreatorInfo($slug: String!) {
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
    <div>
      <h1>HELLO wORLD</h1>
    </div>
  )
}
