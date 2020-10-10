import React from 'react'

export default function Box ({ props, children }) {
  return (
    <div className='h-full w-full border border-gray-300'>
      <h1 className='w-24 bg-white -mt-3 text-center'> {props.title} </h1>
      {children}
    </div>
  )
}
