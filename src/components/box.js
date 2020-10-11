import React from 'react'

export default function Box ({ title, children }) {
  return (
    <div className='h-full w-full border border-gray-300'>
      <h1 className='w-24 bg-white -mt-3 text-center'> {title} </h1>
      {children}
    </div>
  )
}
