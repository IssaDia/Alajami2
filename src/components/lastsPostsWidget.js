import React from 'react'
import Box from './box'
import { LastPosts } from './lastsPosts'

export default function BioWidget () {
  return (
    <Box title='Articles Récents' className='fixed'>
      <ul className='flex flex-col items-center space-y-6 list-disc'>
        <LastPosts />
      </ul>
    </Box>
  )
}
