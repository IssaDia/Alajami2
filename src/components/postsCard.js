import React from 'react'
import Box from './box'
import marked from 'marked'

export default function PostsCard ({ title, content }) {
  return (
    <Box title={title}>
      <div>
        <div className='p-16' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </Box>
  )
}
