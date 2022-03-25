import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import test from '../../src/assets/testimonialimg.svg'


const Testimonial = () => {
  return (
    <div className='testimonials my-5'>
        <h2 className='fs-2 fw-bold'>What are our customers </h2>
        <h2 className='fs-2 fw-bold mb-2'>saying</h2>
        <div className='row'>
            <div className='col-3'>
                <div className='testimonialImgContainer'>
                    <img src={test} alt='' />
                </div>
            </div>

            <div className='col-9 '>
                <div className='testimonialRight'>
                    <div className='arrows'>
                        <i><HiArrowNarrowLeft /></i>
                        <i><HiArrowNarrowRight /></i>
                    </div>

                    <p className='fs-5'>The platform is really convenient to reach out to companies
                        & I have managed to secure 2 interviews already! 
                        can also track my application status instead of 
                        wondering whether the company has seen or shortlisted me.
                        </p>
                    <h4>Irma Black</h4>
                    <h4 className='text-muted'>HR Manager at MasterCard</h4>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default Testimonial