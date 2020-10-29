import { graphql } from 'gatsby'

export const categories = graphql`
  query getCategory {
      allContentfulBlogCategories {
        edges {
            node {
                title
                slug
            }
        }
    }
  }`
