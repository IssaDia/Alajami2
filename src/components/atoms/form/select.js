import React from 'react'

export default function Select ({ title, categories }) {
  console.log(categories)
  const categoriesName = categories.allContentfulBlogCategories.edges.map(({ node }) => {
    return <option key={node.title} title={node.title} />
  })

  console.log(categoriesName)
  return (
    <div>
      <label class='block'>
        <span class='text-gray-700'>{title}</span>
        <select class='form-select block w-full mt-1'>
          {categoriesName}
        </select>
      </label>
    </div>
  )
}
