import React from 'react'
import Lanrover from "../assets/land-roverin-logo.png"
import Avegers from '../assets/the-avengers 1.png'
import etsy from '../assets/etsy.png'
import In from '../assets/linkedin-icon-1.png'
import TikTok from '../assets/tiktok-logo.png'

function Etsy() {
  return (
    <section className='etsy'>
      <div className='etsy__container container'>
        <img className='etsy__logo' src={Lanrover} alt="lanrover" />
        <img className='etsy__logo' src={Avegers} alt="avegers" />
        <img className='etsy__logo' src={etsy} alt="etsy" />
        <img className='etsy__logo' src={In} alt="linkedin" />
        <img className='etsy__logo' src={TikTok} alt="tiktok" />
      </div>
    </section>
  )
}

export default Etsy
