import React from 'react'

import hiw from '../../src/assets/hiw.svg'
import check from '../../src/assets/check.svg'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className='howItWorks'>
      <div className='row howItWorksRow'>
        <div className='col-7'>
          
          <img src={hiw} alt='' className='hiwImages'/>

        </div>

        <div className='col-5'>
          <h1 className='my-2 fw-bolder'>How it works</h1>
          <p className='my-3'>Get a job helps you find the right job easily. Get a job helps you <br/> find the right job easily. Get a job helps you find the right job<br/> easily.</p>
          
          <div class="form-check ">
            <span>
              <img src={check} alt='' />
            </span>
            <label class="form1 fs-5 fw-normal" for="flexCheckDefault">
              Search Jobs
            </label>

            <p className='fw-light my-3'>We have jobs in the most popular industries and with top companies. Plus, you can create alerts so you never miss a job opportunity.</p>
          </div>

          <div class="form-check">
          <span>
              <img src={check} alt='' />
            </span>
            <label class="form1 fs-5 fw-normal" for="flexCheckDefault">
              Create a Profile and Get Noticed
            </label>

            <p className='fw-light my-3'>Create a profile to showcase your skills and experience so recruiters can find you. Upload your CV so you can apply for jobs quickly and easily.</p>
          </div>

          <div class="form-check">
            <span>
              <img src={check} alt='' />
            </span>
            <label class="form1 fs-5 fw-normal" for="flexCheckDefault">
              Apply for jobs
            </label>

            <p className='fw-light my-3'>Find the training you need to improve your skills, or visit our Career Center for tips and advice to build your career.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HowItWorks