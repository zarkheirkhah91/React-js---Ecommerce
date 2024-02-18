import React from 'react'
import Hero from '../components/hero/Hero'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetters from '../components/NewsLetter/NewsLetters'
import Offers from '../components/Offers/Offers'
import Popular from '../components/popular/Popular'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetters/>
    </div>
  )
}

export default Shop
