import React from 'react'
import Box from './box'
import { BioTitle, BioImage, BioDescription } from './bio'

export default function BioWidget () {
  return (
    <Box title='A PROPOS DE MOI'>
      <div className='flex flex-col items-center space-y-6'>
        <BioImage />
        <BioTitle />
        <BioDescription />
      </div>
    </Box>
  )
}
