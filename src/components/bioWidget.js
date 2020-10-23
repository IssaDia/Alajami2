import React from 'react'
import Box from './box'
import { BioTitle, BioImage, BioDescription } from './bio'

export default function BioWidget () {
  return (
    <Box title='A PROPOS DE MOI'>
      <div className='flex flex-col items-center space-y-6'>
        <BioImage />
        <BioTitle />
        <div className='text-xs text-gray-800 px-8 italic text-center'>
          <BioDescription />
        </div>
      </div>
    </Box>
  )
}
