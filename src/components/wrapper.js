import React from 'react'

export default function Layout ({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 960, padding: `0 1rem` }}>
      {children}
    </div>
  )
}