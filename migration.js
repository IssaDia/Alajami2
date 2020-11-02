const contentful = require('contentful')

const client = contentful.createClient({
  space: 'azs4aj6mbubw',
  accessToken: 'uM-nm0vo0K4qQoXK-ttySacz3OLoIo9sp3e1ShN4BHA'
})

client.getSpace()
  .then((space) => {
    console.log(space.getEnvironment('master'))
  })
  .catch(console.error)
