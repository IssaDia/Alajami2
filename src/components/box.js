import React from 'react'

export default function Box ({ title, children }) {
  return (
    <div className='lg:border lg:border-gray-300 flex flex-col items-center space-y-6'>
      <h3 className=' bg-white -mt-3 absolute uppercase tracking-widest px-8'> {title} </h3>
      {children}
    </div>
  )
}
