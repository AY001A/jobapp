import React from 'react'
import paystackcolor from '../../src/assets/paystackcolor.svg'
import flutterwave from '../../src/assets/flutterwave.svg'
import access from '../../src/assets/access.svg'
import google from '../../src/assets/google.svg'
import { GoLocation } from "react-icons/go";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import './Recommendedjobs.css'

const Recommendedjobs = () => {
  return (
    
    <div className='recommended'>
      <h2 className='mb-5' style={{ color: '#3F403F', fontSize: '36px'}}>Recommended Jobs</h2>
      <div className='row recommendedRow'>
        <div className='col recommendedCol'>
          <div className='card'>
            <div className='QAbuttonHolder'>
              <button className='QAbutton '>Full time</button>
            </div>
            
            <div className='recommendedImg'>
              <img src={paystackcolor} alt='' className='recommendedImg'/>
              <h5 className='recommendedRole'>QA Engineer</h5>
            </div>
              <hr />
            <h5 className='recommendedPartner'>Paystack</h5>
            <div className='location d-flex'>
              <i className='recommendedLocationIcon'>
                <GoLocation />
              </i>

              <p className='recommendedLocation'>Lagos, Nigeria</p>

              <button className='recommendedApply'>Apply now</button>

            </div>
          </div>

          <div className='card'>
            <div className='QAbuttonHolder'>
              <button className='QAbutton '>Part time</button>
            </div>
            
            <div className='recommendedImg'>
              <img src={google} alt='' className='recommendedImg'/>
              <h5 className='recommendedRole'>Product Analyst</h5>
            </div>
              <hr />
            <h5 className='recommendedPartner'>Google</h5>
            <div className='location d-flex'>
              <i className='recommendedLocationIcon'>
                <GoLocation />
              </i>

              <p className='recommendedLocation'>Lagos, Nigeria</p>

              <button className='recommendedApply'>Apply now</button>

            </div>
          </div>

          <div className='card'>
            <div className='QAbuttonHolder'>
              <button className='QAbutton '>Full time</button>
            </div>
            
            <div className='recommendedImg'>
              <img src={flutterwave} alt='' className='recommendedImg'/>
              <h5 className='recommendedRole'>HR Manager</h5>
            </div>
              <hr />
            <h5 className='recommendedPartner'>Flutterwave </h5>
            <div className='location d-flex'>
              <i className='recommendedLocationIcon'>
                <GoLocation />
              </i>

              <p className='recommendedLocation'>Abuja, Nigeria</p>

              <button className='recommendedApply'>Apply now</button>

            </div>
          </div>

          <div className='card'>
            <div className='QAbuttonHolder'>
              <button className='QAbutton '>Full time</button>
            </div>
            
            <div className='recommendedImg'>
              <img src={access} alt='' className='recommendedImg'/>
              <h5 className='recommendedRole'>QA Engineer</h5>
            </div>
              <hr />
            <h5 className='recommendedPartner'>Access</h5>
            <div className='location d-flex'>
              <i className='recommendedLocationIcon'>
                <GoLocation />
              </i>

              <p className='recommendedLocation'>Lagos, Nigeria</p>

              <button className='recommendedApply'>Apply now</button>

            </div>
          </div>
        </div>
        

        
         
        
      

        <div className='arrows'>
          <i><HiArrowNarrowLeft /></i>
          <i><HiArrowNarrowRight /></i>
        </div>

      </div>
    </div>
  )
}

export default Recommendedjobs