import React from 'react'

export default function Button ({ name, styles, type }) {
  return (
    <div>
      <button className={styles} type={type}>
        {name}
      </button>
    </div>
  )
}
