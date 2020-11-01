import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export default function ThemesCard ({ title, slug }) {
  return (
    <>
      <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'>
        <Link to={`/theme/${slug}`}>
          <div className='relative bg-black text-white hover:text-black group h-20 w-64 flex justify-center items-center hover:shadow-2xl hover:bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <div className='h-full w-full absolute z-10 bg-cover bg-center'> </div>
            <p className='font-bold text-lg absolute z-20 pointer-events-none font-playfair'>{title}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

ThemesCard.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
}
