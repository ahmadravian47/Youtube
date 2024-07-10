import React from 'react'
import './Section3.css'
import h_pic from './section4.png'
import { Link } from 'react-router-dom';

export default function Section3() {
  return (
       <div className="main">
            <div className="left">
                <h1>Upload with Safety</h1>
                <p>Videos are uploaded to youtube -once you approve </p>
                <div className="hero-buttons">
                    <Link to='/signup' id="primary">Get Started</Link>
                </div>
            </div>
            <div className='right'>
              <img src={h_pic}></img>
            </div>
        </div>
  )
}
