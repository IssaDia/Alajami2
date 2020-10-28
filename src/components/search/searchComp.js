import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, RefinementList } from 'react-instantsearch-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import hit from './hit'

export default function SearchComp () {
  console.log(hit)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  return (
    <InstantSearch indexName='Posts' searchClient={searchClient}>
      <SearchBox className='' autofocus translations={{ placeholder: 'Tapez votre recherche' }} submit={<FontAwesomeIcon icon={faSearch}/>}/>
      <RefinementList attribute='tags' />
      <ais-search-box />
      <Hits hitComponent={hit} />
    </InstantSearch>
  )
}
