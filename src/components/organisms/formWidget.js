import React from 'react'
import Box from '../atoms/box'
import { useStaticQuery, graphql } from 'gatsby'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
const validationSchema = Yup.object().shape({
  category: Yup.string()
    .ensure()
    .required('Merci de spécifier un théme'),
  message: Yup.string()
    .min(10, 'Meesage trop court!')
    .max(500, 'Message trop long!')
    .required('Merci de ne pas laisser vide'),
  email: Yup.string()
    .email('Email non valide!')
    .trim()
    .required('Merci de ne pas laisser vide')
})

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

  const optionsData = data.allContentfulBlogCategories.edges.map(({ node }, index) => {
    return <option key={index}>{node.title}</option>
  })

  return (
    <div>
      <Box title='Formulaire de contact'>
        <Formik
          initialValues={{ email: '', message: '', category: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true)
            axios.post('http://localhost:5000/contact/send', values)
              .then(function (response) {
                setTimeout(() => {
                  setSubmitting(false)
                }, 100)
              })
              .catch(function (error) {
                console.log(error)
              })
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className='w-full max-w-xl space-y-10 p-16 font-noticia'>
              <div className='w-full px-3'>
                <div className='flex items-center border-b border-gray-900 py-2'>
                  <Field
                    id='email'
                    name='email'
                    type='email'
                    className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email} placeholder='Tapez votre @'
                  />
                </div>
                {touched.email && errors.email ? <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'><span className='helper-text text-red-400'>{errors.email}</span></div> : null}
              </div>
              <div className='w-full px-3'>
                <div className='px-3 mb-6 md:mb-0'>
                  <label className='block'>
                    <span className='text-gray-700'>Choisissez le théme</span>
                    <select className={'form-select block w-full mt-1 ' + (touched.category && errors.category ? 'has-error' : null)} name='category' value={values.category} onChange={handleChange} onBlur={handleBlur}>
                      {optionsData}
                    </select>
                  </label>
                </div>
              </div>
              {touched.category && errors.category ? <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'><span className='helper-text text-red-400'>{errors.category}</span></div> : null}
              <div className='w-full px-3l'>
                <Field
                  className='form-textarea w-full'
                  component='textarea'
                  name='message'
                  rows='10'
                  placeholder='Tapez votre message'
                />
              </div>
              {touched.message && errors.message ? <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'><span className='helper-text text-red-400'>{errors.message}</span></div> : null}
              <div className='w-full text-center'>
                <button className='bg-gray-600 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-gray-900 hover:border-green-900 rounded' type='submit'>
                Soumettre
                </button>
              </div>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  )
}
