import React from 'react'
import './Product.css'
import h_pic from './product.png'

export default function Product() {
  return (
    <div className='product'>
      <h1>TubeX-what?</h1>
      <h4>Get to know a bit what TubeX is and what drives us</h4>
      <div className='parent'>
        <div className='left'>
            <h3 className='bold'>The Problem</h3>
            <h3>While speaking with several YouTubers, I learned that they often hire others to help with their
                 channels. They frequently face challenges with downloading large files, so they rely on 
                 third-party services to handle this task for them. TubeX can download their videos
                  and submit them on their behalf, pending approval.
            </h3>
        </div>
        <div className='right'>
            <img src={h_pic}></img>
        </div>
      </div>
    </div>
  )
}
