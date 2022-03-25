import React from 'react'
import Start from './Start'
import Candidate from './Candidate'
import HowItWorks from './HowItWorks'
import Navbar from './Navbar'
import LearnMore from './LearnMore'
import PopularCategories from './PopularCategories'
// import Recommendedjobs from './Recommendedjobs'
import Testimonial from './Testimonial'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='container'>
        <Navbar />
        <Candidate />
        {/* <Recommendedjobs /> */}
        <HowItWorks />
        <PopularCategories />
        <LearnMore />
        <Testimonial />
        <Start />
        <Footer />
    </div>
  )
}

export default Home