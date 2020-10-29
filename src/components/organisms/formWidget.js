import React from 'react'
import Box from '../atoms/box'
import { useStaticQuery, graphql } from 'gatsby'
import { Formik, Field } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  category: Yup.string()
    .ensure()
    .required('Merci de spécifier un théme'),
  firstname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
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
          initialValues={{ name: '', surname: '', email: '', message: '', category: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values)
              setSubmitting(false)
            }, 400)
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
            <form onSubmit={handleSubmit} className='w-full max-w-xl space-y-6 p-12 font-noticia'>
              <div className='flex flex-wrap -mx-3 mb-6'>
                <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                  <div className='flex items-center border-b border-gray-900 py-2'>
                    <Field
                      id='name'
                      name='name'
                      type='text'
                      className={'validate appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ' + (touched.name && errors.name ? 'has-error' : null)}
                      placeholder='Tapez votre nom'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {touched.name && errors.name ? <span className='helper-text'>{errors.name}</span> : null}
                  </div>
                </div>
                <div className='w-full md:w-1/2 px-3'>
                  <div className='flex items-center border-b border-gray-900 py-2'>
                    <Field
                      id='surname'
                      name='surname'
                      type='text'
                      className={'validate appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ' + (touched.surname && errors.surname ? 'has-error' : null)}
                      placeholder='Tapez votre prénom'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.surname}
                    />
                  </div>
                </div>
              </div>
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
              {errors.email && touched.email && errors.email}
              <div className='w-full px-3l'>
                <Field
                  className='form-textarea w-full'
                  component='textarea'
                  name='message'
                  rows='16'
                  placeholder='Tapez votre message'
                />
              </div>
              <div className='w-full'>
                <button className='bg-gray-600 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-gray-900 hover:border-green-900 rounded' type='button'>
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
