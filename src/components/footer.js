import React from 'react'
import { Link } from 'gatsby'
import { LastPosts } from './lastsPosts'

export default function Footer () {
  return (
    <footer className='bg-black justify-evenly flex flex-wrap text-white'>
      <div className='flex flex-col'>
        <h4 className='mt-8 uppercase'>Liens Rapides</h4>
        <div>
          <ul className='my-6'>
            <Link to='/'><li className='border-b-2 border-gray-600'>Home</li></Link>
            <Link to='/themes'><li className='border-b-2 border-gray-600'>Themes</li></Link>
            <Link to='/search'><li className='border-b-2 border-gray-600'>Search</li></Link>
            <Link to='/contact'><li className='border-b-2 border-gray-600'>Contact</li></Link>
          </ul>
        </div>
      </div>
      <div className='flex flex-col'>
        <h4 className='mt-8 uppercase'>Articles Récents</h4>
        <div>
          <ul className='my-6'>
            <LastPosts />
          </ul>
        </div>
      </div>
    </footer>
  )
}
