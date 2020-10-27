require('dotenv').config();
(async () => {
  const algoliaSearch = require('algoliasearch')
  const { createClient } = require('contentful')

  const { GATSBY_ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY, ALGOLIA_INDEX_NAME } = process.env

  const space = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

  const algoliaClient = algoliaSearch(GATSBY_ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY)
  const algoliaIndex = algoliaClient.initIndex(ALGOLIA_INDEX_NAME)

  const ctfClient = createClient({
    space,
    accessToken
  })

  try {
    const { items } = await ctfClient.getEntries({
      content_type: 'blogPost',
      limit: 1000
    })
    const posts = items.map((post) => ({
      title: post.fields.title,
      slug: post.fields.slug,
      content: post.fields.content,
      publishDate: post.fields.publishDate,
      tags: post.fields.tags,
      postCategory: post.fields.postCategory

    }))
    const indexedContent = await algoliaIndex
      .saveObjects(posts, { autoGenerateObjectIDIfNotExist: true })
      .then(({ objectIDs }) => {
        console.log(objectIDs)
      })

    console.log('Indexed Content', indexedContent)
  } catch (error) {
    console.log(error)
  }
})()
