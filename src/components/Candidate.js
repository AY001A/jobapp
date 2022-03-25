import React from 'react'
import paystack from '../../src/assets/paystack-removebg-preview.svg'
import google from '../../src/assets/google-removebg-preview.svg'
import kpmg from '../../src/assets/kpmg-removebg-preview.svg'
import heroImg from '../../src/assets/hero-image.svg'
import { BiSearchAlt } from 'react-icons/bi'

const Candidate = () => {
  return (
    <div className='hero'>
      <div className='row' >
        <div className='col coleft'>
          <div className='heroLeft'>
            <h1>Find a <span className='job'>Job</span> easily</h1>
            <p>With a verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.</p>
              <div class="input-group">
                <input type="text"  placeholder="Enter keywords, skill, interest" style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px', width: "250px", border: 'none', backgroundColor: '#f9f9f9', padding: '15px', height: '45px' }} />
                <input type="text"  placeholder="location" style={{ width: "120px", border: 'none', backgroundColor: '#f9f9f9', padding: '15px', borderLeft: '1px solid grey', height: '45px'}} />
                
                <span className="input-group-text center" style={{ backgroundColor: '#06942A', color: 'white', fontSize: '25px', borderTopRightRadius: '30px', borderBottomRightRadius: '30px', cursor: 'pointer', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center'   }}>
                  <i><BiSearchAlt /></i>
                </span>
                  
                
              </div>

            <h5 className='my-4'>Trusted by:</h5>
            <div className='brand' style={{ cursor: 'pointer'}}>
              <img className='me-5' src={paystack} alt='' />
              <img className='me-5' src={google} alt='' />
              <img className='me-5' src={kpmg} alt='' />
            </div>

          </div>
        </div>
        <div className='col'>
          <img src={heroImg} alt='' style={{ height: '90vh'}}/>
 
        </div>
      </div>
    </div>
  )
}

export default Candidate