import React from 'react'
import Wrapper from '../components/wrapper'
import Header from '../components/header'
import Jumbotron from './jumbotron'

export default function Layout ({ children }) {
  return (
    <Wrapper>
      <Header />
      <Jumbotron />
      {children}
    </Wrapper>
  )
}
