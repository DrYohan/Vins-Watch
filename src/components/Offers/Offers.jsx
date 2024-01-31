import React from 'react'
import './Offers.css'
import exclucive_image from '../assests/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You </h1>
          <p>Only on Best Sellers Product</p>
          <button>Check NOW</button>
        </div>
      <div className="offer-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
