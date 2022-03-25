import React from 'react'
import OAG from '../../src/assets/Oil and Gas icon.svg'
import HC from '../../src/assets/Healthcare icon.svg'
import EDU from '../../src/assets/Accounting icon.svg'
import ACC from '../../src/assets/Accounting icon (1).svg'
import DAM from '../../src/assets/DAM.svg'
import TECH from '../../src/assets/Laptop.svg'
import SEC from '../../src/assets/Security icon.svg'
import DA from '../../src/assets/Data Analyst Icon.svg'
import './PopularCategories.css'

const PopularCategories = () => {
  return (
    <div className='popularCat'>
      <h1 className='text-center my-4 fw-bolder' >Popular Category</h1>

      <div className='row'>
        <div className='col-3'>
            <div className='card'>
              <div className='popularCategories'>
                <img src={OAG} alt='' />

                <p className='popular text-center'>Oil and Gas</p>
                <p className='popularP'>(20 new jobs)</p>

              </div>
              
            </div>
          </div>

          <div className='col-3'>
          <div className='card'>
            <div className='popularCategories'>
              <img src={HC} alt='' />

              <p className='popular text-center'>Healthcare</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='popularCategories'>
              <img src={EDU} alt='' />

              <p className='popular text-center'>Education</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='popularCategories'>
              <img src={ACC} alt='' />

              <p className='popular text-center'>Accounting</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        
      </div>

      <div className='row'>
        

        <div className='col-3'>
          <div className='card'>
            <div className='popularCategories'>
              <img src={DAM} alt='' />

              <p className='popular text-center'>Design</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='popularCategories'>
              <img src={TECH} alt='' />

              <p className='popular text-center'>Technology</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='popularCategoriesCard'>
              <img src={SEC} alt='' />

              <p className='popular text-center'>Security</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='popularCategoriesCard'>
              <img src={DA} alt='' />

              <p className='popular text-center'>Data Analyst</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories