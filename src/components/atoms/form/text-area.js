import React from 'react'

export default function TextArea ({ row, message }) {
  return (
    <div>
      <label className='block'>
        <textarea className='form-textarea mt-1 block w-full focus:border-white' rows={row} placeholder={message} />
      </label>
    </div>
  )
}
