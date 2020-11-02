const contentful = require('contentful')

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

client.getSpace()
  .then((space) => {
    console.log(space)
  })
  .catch(console.error)
