import React from 'react'
import Breadcrumb2 from '../Components/Breadcrumb2'
import Certified from '../Components/Certified'
import Corefeatures from '../Components/Corefeatures'
import Emergency from '../Components/Emergency'
import Featuredservices from '../Components/Featuredservices'
import Footer from '../Components/Footer'
import Header3 from '../Components/Header3'
import Ourservices from '../Components/Ourservices'

function Service() {
  return (
    <div>
       <Header3/>
       <Breadcrumb2/>
       <Certified/>
       <Ourservices/>
       <Featuredservices/>
       <Corefeatures/>
       <Emergency/>
       <Footer/>
    </div>
  )
}

export default Service