import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Box from '../atoms/box'
import marked from 'marked'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function SinglePost ({ title, content, pageContext, categorySlug }) {
  const prev = pageContext.prev ? {
    url: `/theme/${categorySlug}/${pageContext.prev.slug}`,
    title: pageContext.prev.title
  } : null
  const next = pageContext.next ? {
    url: `/theme/${categorySlug}/${pageContext.next.slug}`,
    title: pageContext.next.title
  } : null
  return (
    <Box title={title}>
      <div>
        <div className='p-16 space-y-6 text-justify tracking-wider text-gray-800 text-lg font-playfair' dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
      <div className='text-xs lg:w-full px-8'>
        <div className='float-left arrow-link-container my-8'>
          {prev && (
            <>
              <Link to={prev.url} className='flex flex-wrap space-x-2'>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className='arrow-link-text'>{prev.title}</span>
              </Link>
            </>
          )}
        </div>
        <div className='float-right arrow-link-container my-8'>
          {next && (
            <>
              <Link to={next.url} className='flex flex-wrap space-x-2'>
                <span className='arrow-link-text'>{next.title}</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </>
          )}
        </div>
      </div>
    </Box>
  )
}

SinglePost.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
  pageContext: PropTypes.object,
  categorySlug: PropTypes.string
}
