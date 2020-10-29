import React from 'react'
import Input from '../atoms/form/input'
import Box from '../atoms/box'
import Button from '../atoms/form/button'
import Select from '../atoms/form/select'
import TextArea from '../atoms/form/text-area'
import { useStaticQuery, graphql } from 'gatsby'
import Option from '../atoms/form/option'

export default function FormWidget () {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogCategories {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`)
const categories = data.allContentfulBlogCategories.edges.map(({ node }) => {
  return <Option key={node.title} title={node.title} />
})
  return (
    <div>
      <Box title='Formulaire de contact'>
        <form class='w-full max-w-lg'>
          <div class='flex flex-wrap -mx-3 mb-6'>
            <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <Input label='Nom' type='text' placeHolder='Tapez votre nom' />
            </div>
            <div class='w-full md:w-1/2 px-3'>
              <Input label='Prénom' type='text' placeHolder='Tapez votre prénom' />
            </div>
          </div>
          <div class='flex flex-wrap -mx-3 mb-6'>
            <div class='w-full px-3 mb-6 md:mb-0'>
              <Input label='Email' type='email' placeHolder='Tapez votre @' />
            </div>
          </div>
          <div class='flex flex-wrap -mx-3 mb-6'>
            <div class='w-full px-3 mb-6 md:mb-0'>
              <Select title='Choisissez le théme' categories={data} />
            </div>
          </div>
          <div class='flex flex-wrap -mx-3 mb-6'>
            <div class='w-full px-3 mb-6 md:mb-0'>
              <TextArea row='6' message='Tapez votre message' />
            </div>
          </div>
          <Button name='Envoyer' />
        </form>
      </Box>
    </div>
  )
}
