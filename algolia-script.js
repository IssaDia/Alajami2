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
    const posts = items.map((item, index) => ({
      objectID: index + 1,
      title: item.fields.title,
      slug: item.fields.slug,
      content: item.fields.body,
      publishDate: item.fields.publishDate,
      tags: item.fields.tags,
      postCategory: item.fields.postCategory

    }))
    console.log(posts)
    const indexedContent = await algoliaIndex.saveObjects(posts)
    console.log(indexedContent)
    console.log('Indexed Content', indexedContent)
  } catch (error) {
    console.log(error)
  }
})()
