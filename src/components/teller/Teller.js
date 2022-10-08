import React from 'react'
import './terller.css'


const tellers = [
    {
        name: "Teller 1",
        value: 0
    },
    {
        name: "Teller 2",
    },
    {
        name: "Teller 3",
    },
    {
        name: "Teller 4",
    },
]

const timer =  <div className='teller'>
    {
        tellers.map((m)=>{
            return <div className='teller--'>
            {m.name}
            
        </div>
        })
    }


</div>

function teller() {
  return (
     <>
       {timer}
     </>
  )
}

export default teller