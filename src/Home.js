import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'
import Service from './Service'
import Contact from './Contact'

const Home = () => {
  const {updateHomePage}= useGlobalContext()

  useEffect(()=>{
    updateHomePage()
  },[])
  return (
    <>
    <HeroSection />
    <Service/>
    <Contact/>
    </>
  )
}

export default Home
