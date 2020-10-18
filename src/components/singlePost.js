import React from 'react'
import Box from './box'
import marked from 'marked'

export default function SinglePost ({ title, content }) {
  return (
    <Box title={title}>
      <div>
        <div className='p-16 space-y-6 text-justify tracking-wider text-gray-800 text-lg' dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </div>
    </Box>
  )
}
