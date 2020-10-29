import React from 'react'

export default function TextArea (props) {
  return (
    <div>
      <label class='block'>
        <textarea class='form-textarea mt-1 block w-full focus:border-white' rows={props.row} placeholder={props.message} />
      </label>
    </div>
  )
}
