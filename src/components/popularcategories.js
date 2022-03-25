import React from 'react'
import OAG from '../../src/assets/Oil and Gas icon.svg'
import HC from '../../src/assets/Healthcare icon.svg'
import EDU from '../../src/assets/Accounting icon.svg'
import ACC from '../../src/assets/Accounting icon (1).svg'
import DAM from '../../src/assets/DAM.svg'
import TECH from '../../src/assets/Laptop.svg'
import SEC from '../../src/assets/Security icon.svg'
import DA from '../../src/assets/Data Analyst Icon.svg'

const PopularCategories = () => {
  return (
    <div className='popularCategory'>
      <h1 className='text-center my-3'>Popular Category</h1>

      <div className='row'>
        <div className='col-3'>
            <div className='card popularcard'>
              <div className='popularCategoryCard'>
                <img src={OAG} alt='' />

                <p className='popularPP text-center'>Oil and Gas</p>
                <p className='popularP'>(20 new jobs)</p>

              </div>
              
            </div>
          </div>

          <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={HC} alt='' />

              <p className='popularPP text-center'>Healthcare</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={EDU} alt='' />

              <p className='popularPP text-center'>Education</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={ACC} alt='' />

              <p className='popularPP text-center'>Accounting</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        
      </div>

      <div className='row'>
        

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={DAM} alt='' />

              <p className='popularPP text-center'>Design</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={TECH} alt='' />

              <p className='popularPP text-center'>Technology</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={SEC} alt='' />

              <p className='popularPP text-center'>Security</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>

        <div className='col-3'>
          <div className='card popularcard'>
            <div className='popularCategoryCard'>
              <img src={DA} alt='' />

              <p className='popularPP text-center'>Data Analyst</p>
              <p className='popularP'>(20 new jobs)</p>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCategories