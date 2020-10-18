import React from 'react'
import { Link } from 'gatsby'

export default function ThemeCard ({ title, slug }) {
  return (
    <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
      <Link to={slug}>
        <div className='relative bg-black shadow-lg rounded-lg group h-12 w-64 flex justify-center items-center'>
          <div className='rounded-lg h-full w-full absolute z-10 bg-cover bg-center hover:opacity-50 transition-all duration-500 ease-in-out'> </div>
          <p className='font-bold text-lg text-white absolute z-20 pointer-events-none'>{title}</p>
        </div>
      </Link>
    </div>
  )
}
