import React from 'react'

export default function Input (props) {
  return (
    <div class='flex items-center border-b border-teal-500 py-2'>
      <input class='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none' type={props.type} placeholder={props.placeHolder} aria-label='Full name' />
    </div>
  )
}
