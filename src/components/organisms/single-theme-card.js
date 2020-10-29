import { Link } from 'gatsby'
import React from 'react'

export default function SingleThemeCard ({ title, theme, content, slug }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg font-playfair p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
      <div>
        <Link to={slug}><h2 className='uppercase text-black font-extrabold text-sm'>{title}</h2></Link>
      </div>
      <div className='flex flex-row'>
        <span className='text-yellow-500 text-xs'>{theme}</span>
        <span> / </span>
      </div>
      <p className='text-gray-900 text-sm'>{content}</p>
      <Link to={slug}>
        <div className='float-right flex flex-row'>
          <p className='text-yellow-500'>Continuer à lire</p>
          <span className='text-yellow-500 text-l'>→</span>
        </div>
      </Link>
    </div>
  )
}
