import React from 'react'
import Box from '../components/box'

export default function BoxContentBio () {
  return (
    <Box title='About Me'>
      <div class='flex items-center'>
        <img
          class='w-10 h-10 rounded-full mr-4'
          src='/img/jonathan.jpg'
          alt='Avatar of Jonathan Reinink'
        />
      </div>
    </Box>
  )
}
