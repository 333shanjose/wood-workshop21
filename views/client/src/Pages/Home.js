import React from 'react'
import Experiance from '../Components/Experiance'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Wedo from '../Components/Wedo'
import Projects1 from '../Components/Projects1'
import Work from '../Components/Work'
import Testimonial from '../Components/Testimonial'
import News from '../Components/News'
import Clients from '../Components/Clients'
import Emergency from '../Components/Emergency'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <Slider/>
        <Experiance/>
        <Wedo/>
        <Projects1/>
        <Work/>
        <Testimonial/>
        <News/>
        <Clients/>
        <Emergency/>
        <Footer/>
    </div>
  )
}

export default Home
