import React from 'react'
import paystack from '../assets/paystack.svg'
import google from '../assets/google.svg'
import hr from '../assets/paystack.svg'
import access from '../assets/flutterwave.svg'
import './Recommendedjobs.css'

const Recommendedjobs = () => {
  return (
<div className='kontainer'>
    <div className='container'>
    <div className='row'>
        <div className='col-lg-12'>
        <h1 className=' recommended  fw-bolder'>Recommended Jobs</h1>
        </div>
    </div>
    </div>


<div className='container'>
    <div className='row'>
        <div className='col-lg-3 cards'>
        <button className='btn btn-light time-buttons-paystack'>Full Time</button>
            <img src={paystack} className='Popular-img-paystack' alt='paystack' />
            <p className='titles'>QA Engineer</p>

                <h5 className='title-header'> Paystack</h5>
                <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
            </div>
            

            <div className='col-lg-3 cards'>
            <button className='btn btn-light time-buttons'>Part Time</button>
                <img src={google} className='Popular-img-google' alt='google' />
                <p className='titles'>Product Analyst</p>

                <h5 className='title-header'> Paystack</h5>
                <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
            </div>

            <div className='col-lg-3 cards'>
            <button className='btn btn-light time-buttons'>Full Time</button>
                <img src={hr} className='Popular-img-hr' alt='hr' />
                <p className='titles'>HR Manager</p>

                <h5 className='title-header'> Paystack</h5>
                <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
            </div>

            <div className='col-lg-3 cards'>
            <button className='btn btn-light time-buttons-access'>Full Time</button>
            <img src={access} className='Popular-img' alt='access' />
            <p className='titles'>QA Engineer</p>

            <h5 className='title-header'> Paystack</h5>
            <p className='address'>Lagos, Nigeria <a href className='apply'>Apply Now</a></p>
        </div>
    </div>
</div>

 </div>
  )
}

export default Recommendedjobs