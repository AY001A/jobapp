import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import FW from '../../src/assets/Flutterwav.svg'
import Uber from '../../src/assets/Uber.svg'
import Zapier from '../../src/assets/Zapier.svg'
import Airtel from '../../src/assets/Airtel.svg'
import etisalat from '../../src/assets/9mobile.svg'
import Accenture from '../../src/assets/Accenture.svg'
import Mckinsey from '../../src/assets/Mckinsey.svg'
import Googl from '../../src/assets/Googl.svg'
import { Link } from 'react-router-dom'

const LearnMore = () => {
  return (
    <div className='partners bg-light my-4'>
      <div className='row'>
        <div className='col partner'>
            <div className='partnerCol'>
              <h1 className='partnerHeader my-3'>Over  1000+  jobs from top companies in our network</h1>
              <p className='partnerP'>Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.</p>
              <p className='partnerP'>Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.</p>
              
              <Link to='/' className='partnerLink'>Learn More</Link>
              <i className='partnerLinkIcon'>
                <HiArrowNarrowRight />
              </i>
            </div>
        </div>
          

        <div className='col'>
          <img src={FW} alt='' />
          <img src={Uber} alt='' />
          <img src={Zapier} alt='' />
          <img src={Airtel} alt='' />
          <img src={etisalat} alt='' />
          <img src={Accenture} alt='' />
          <img src={Mckinsey} alt='' />
          <img src={Googl} alt='' />
        </div>
      </div>
    </div>
  )
}

export default LearnMore