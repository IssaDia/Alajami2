import React from 'react'
import { Link } from 'gatsby'

export default function Jumbotron () {
  return (
    <div className='flex flex-col h-30 sm:h-64 grid-rows-1'>
      <Link to='/'>
        <div className='grid-cols-1 w-full text-black text-center font-serif pt-16 sm:text-4xl uppercase tracking-widest text-lg '>
          <h1 className='animate__animated animate__lightSpeedInLeft'> Que dit vraiment le Coran ? </h1>
        </div>
        <div className=' grid-cols-1 w-full text-gray-700 text-center pt-1 text-xs sm:text-xl sm:uppercase'>
          <p className='animate__animated animate__lightSpeedInRight'>Penser et vivre son islamité à la lumiére du Coran</p>
        </div>
      </Link>
    </div>
  )
}
