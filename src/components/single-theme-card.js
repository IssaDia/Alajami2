import { Link } from 'gatsby'
import React from 'react'

export default function SingleThemeCard ({ title, theme, content, slug }) {
  return (
    <div className='flex flex-col border border-gray-300 lg:w-full mt-8 p-8 font-playfair justify-between'>
      <Link to={slug}><h2 className='uppercase text-black font-extrabold text-2xl'>{title}</h2></Link>
      <div className='flex flex-row'>
        <span className='text-yellow-500'>{theme} </span>
        <span> / </span>
      </div>
      <p className='text-gray-900'>{content}</p>
      <Link to={slug}><p className='float-right text-yellow-500'>Continuer à lire</p></Link>
    </div>
  )
}
