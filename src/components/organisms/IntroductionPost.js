import React from 'react'
import PropTypes from 'prop-types'
import Box from '../atoms/box'
import marked from 'marked'

export default function IntroductionPost ({ title, content }) {
  return (
    <Box title={title}>
      <div>
        <div className='p-16 space-y-6 text-justify tracking-wider text-gray-800 text-lg font-playfair' dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </Box>
  )
}

IntroductionPost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}
