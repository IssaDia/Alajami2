import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Box from '../components/box'
import ThemeCard from '../components/themeCard'
import LastsPostsWidget from '../components/lastsPostsWidget'

export default function ThemesTemplate ({ data, pageContext }) {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/themes/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  const themedCards = data.allContentfulBlogCategories.edges.map(
    ({ node }) => {
      return (
        <ThemeCard key={node.title} title={node.title} slug={node.slug}>
          {node.title}
        </ThemeCard>
      )
    }
  )
  return (
    <Layout>
      <div className='w-full lg:w-3/4 lg:px-4 sm:h-42 lg:max-h-xs lg:m-0 mt-8'>
        <Box title='Themes'>
          <div className='grid grid-rows-3 grid-flow-col gap-4'>
            {themedCards}
          </div>
          <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
            <div className='flex-1 flex justify-between sm:hidden'>
              {!isFirst && (
                <Link to={prevPage} rel='next' className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-black hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150' aria-label='Previous'>
                    Précédent
                </Link>
              )}
              {!isLast && (
                <Link to={nextPage} rel='next' className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-black bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'>
                    Suivant
                </Link>
              )}
            </div>
            <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
              <div>
                <nav className='relative z-0 inline-flex shadow-sm'>
                  {!isFirst && (
                    <Link to={prevPage} rel='next' className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150' aria-label='Previous'>
                      <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                        <path fill-rule='evenodd' d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z' clip-rule='evenodd' />
                      </svg>
                    </Link>
                  )}
                  <a href='#' className='-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'>
                    {Array.from({ length: numPages }, (_, i) => (
                      <Link className='-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150' key={`pagination-number${i + 1}`} to={`/themes/${i === 0 ? '' : i + 1}`}>{i + 1}</Link>
                    ))}
                  </a>
                  {!isLast && (
                    <Link to={nextPage} rel='next' className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150' aria-label='Next'>
                      <svg className='h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
                        <path fill-rule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clip-rule='evenodd' />
                      </svg>
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </div>
        </Box>
      </div>
      <div className='w-full lg:w-1/4 px-4'>
        <LastsPostsWidget />
      </div>
    </Layout>
  )
}

export const data = graphql`
  query BlogCategories($skip: Int! = 0) {
    allContentfulBlogCategories(limit: 6, skip: $skip) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
