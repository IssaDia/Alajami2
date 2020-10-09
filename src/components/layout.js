import React from 'react'
import Wrapper from '../components/wrapper'
import Header from '../components/header'

export default function Layout ({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}
