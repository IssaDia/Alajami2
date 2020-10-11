import React from 'react'
import { Link } from 'gatsby'

export default function Jumbotron () {
  return (
    <div className='flex flex-col h-64'>
      <Link to='/'>
        <div className='w-full text-black text-center font-serif pt-16 text-4xl uppercase tracking-widest'>
          <h1> Que dit vraiment le Coran ? </h1>
        </div>
        <div className='w-full text-gray-700 text-center pt-1 text-sm uppercase'>
          <p>Penser et vivre son islamité à la lumiére du Coran</p>
        </div>
      </Link>
    </div>
  )
}
