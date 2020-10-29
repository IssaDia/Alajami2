import React from 'react'

export default function Select ({ title, options }) {
  const optionsData = options.map(({ node }, index) => {
    return <option key={index}>{node.title}</option>
  })
  return (
    <div>
      <label className='block'>
        <span className='text-gray-700'>{title}</span>
        <select className='form-select block w-full mt-1'>
          {optionsData}
        </select>
      </label>
    </div>
  )
}
