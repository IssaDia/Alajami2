import React from 'react'

export default function Input ({type, placeHolder}) {
  return (
    <div className='flex items-center border-b border-teal-500 py-2'>
      <input className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type={type} placeholder={placeHolder} aria-label='Full name' />
    </div>
  )
}
