import React from 'react'
import Header from '../components/header'
import Jumbotron from './jumbotron'

export default function Layout ({ children }) {
  return (
    <div className='container mx-auto font bg-white'>
      <Header />
      <Jumbotron />
      {children}
    </div>
  )
}
