import React from 'react'
import Box from '../atoms/box'
import { LastPosts } from '../../logic/lastsPosts'

export default function BioWidget () {
  return (
    <Box title='Articles Récents' className='fixed'>
      <ul className='flex flex-col items-center space-y-6'>
        <LastPosts />
      </ul>
    </Box>
  )
}
