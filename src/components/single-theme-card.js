import React from 'react'

export default function SingleThemeCard ({ title, theme, content }) {
  return (
    <div className='flex flex-col border border-gray-300 lg:w-full'>
      <h2 className=''>{title}</h2>
      <span className='uppercase'>{theme}</span>
      <p>{content}</p>
      <p>Continuer à lire</p>
    </div>
  )
}
