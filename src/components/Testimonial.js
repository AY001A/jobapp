import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import test from '../../src/assets/testimonialimg.svg'
import './Testimonial.css'


const Testimonial = () => {
  return (
    <div className='testimonials my-5'>
        <h2 className='tettle fs-2 fw-bold'>What are our customers </h2>
        <h2 className=' tetle fs-2 fw-bold mb-2'>saying</h2>
        <div className='row'>
            <div className='col-3'>
                <div className='testimonialImgContainer'>
                    <img src={test} alt='' />
                </div>
            </div>

            <div className='col-9 '>
                <div className='testimonialRight'>
                    {/* <div className='arrows'>
                        <i><HiArrowNarrowLeft /></i>
                        <i><HiArrowNarrowRight /></i>
                    </div> */}

                    <p className='words fs-6'>The platform is really convenient to reach out to companies
                        & I have managed <br/> to secure 2 interviews already! 
                        can also track my application status instead of <br/>
                        wondering whether the company has seen or shortlisted me.
                        </p>
                    <h6 className='irma fw-bold'>Irma Black</h6>
                    <h4 className='muted'>HR Manager at MasterCard</h4>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default Testimonial