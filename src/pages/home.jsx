import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Logo from '../components/logo'
import Card from '../components/card'
import Nfts from '../components/nft'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Logo/>
      <Card/>
      <Nfts/>
      <Footer/>
    </div>
  )
}

export default Home
