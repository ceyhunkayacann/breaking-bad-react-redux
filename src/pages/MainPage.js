import React from 'react';
import BCS from '../assets/bcscover.jpg'
import BB from '../assets/bbcover.jpg'
import './mainpage.css'

function MainPage() {
  return (
    <div id='cover-container'>
        <div className='covers'>
            <img className='cover-img' src={BB}></img>
        </div>
        <div className='covers'>
            <img className='cover-img' src={BCS}></img>
        </div>
    </div>
  )
}

export default MainPage