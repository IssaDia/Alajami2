
import { Link } from 'gatsby'
import React from 'react'

export default ({ hit }) => (
  <div className='flex flex-no-wrap'>
    <Link to={`/theme/${hit.postCategory.fields.slug}/${hit.slug}`}>
      <div className='max-w-sm rounded overflow-hidden shadow-lg font-playfair p-6 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
        <div className='w-48'>
          <h2 className='uppercase text-black font-extrabold text-xs hover:underline'>{hit.title}</h2>
        </div>
        <div className='flex flex-row'>
          <span className='text-yellow-500 text-xs'>{hit.theme}</span>
        </div>
      </div>
    </Link>
  </div>

)
