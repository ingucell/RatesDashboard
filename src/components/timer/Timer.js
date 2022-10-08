import React from 'react'
import Clock from 'react-live-clock'
import './timer.css'

function timer() {
  return (
    <>
         
            <h1 className='c'>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'GMT'}  className="clock"/>

            <div className='info'>
              For Customer Services
              <br />
              Contact +233-000-00 
              <br />
              info@calbank.gh.net
              </div>
            </h1>

       
       
    </>
  )
}

export default timer