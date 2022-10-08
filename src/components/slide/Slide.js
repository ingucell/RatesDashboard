import React from 'react'
import './slide.css'
import  Carousel from 'nuka-carousel'
import p1 from './cal1.jpg'
import p2 from './30.webp'
import p3 from './pay.jpg'
import vid from './s1.mp4'

export default function Slide() {
  return (
    <div className='slide'>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="60000">
      <img src={p1} class="d-block w-100" alt="..." className='img'/>
    </div>
    <div class="carousel-item" data-bs-interval="30000">
      {/* <img src={vid} class="d-block w-100" alt="..." className='img'/> */}
      <video src={vid} autoPlay muted className='img vid'></video>
    </div>
    <div class="carousel-item">
      <img src={p2} class="d-block w-100" alt="..." className='img'/>
    </div>
  
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


     
    </div>

    
  )
}
