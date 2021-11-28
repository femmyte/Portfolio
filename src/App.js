import React, { useEffect } from 'react'
import AboutUs from './components/AboutUs'
import Card from './components/Card'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import AOS from 'aos'
import 'aos/dist/aos.css'
const App = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    })
  })
  return (
    <>
      <div
        className='bg-gray-100 min-h-screen py-10 px-3 sm:px-5 relative'
        id='up'
      >
        <div data-aos='fade-down' data-aos-duration='800'>
          <Card />
        </div>
        <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'>
          <AboutUs />
        </div>
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
