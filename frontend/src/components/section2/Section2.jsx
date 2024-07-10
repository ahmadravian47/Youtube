import React from 'react'
import './Section2.css'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './imag33.png'

export default function Section2() {
  return (
    <div className='section2'>
      <h1>Upload, Approve, Done</h1>
      <div className="container">
        <div className="step step1">
          <div className="step-content">
            <h3>1</h3>
            <h2>Choose your service type</h2>
            <p>You will be first signup either as a Youtuber or Editor</p>
            <div className='image'>
              <img src={image1}></img>
            </div>

          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3>2</h3>
            <h2>Upload Video</h2>
            <p>Once the video is edited ,a notification is sent to youtuber
            </p>
            <div className='image'>
              <img src={image2}></img>
            </div>
          </div>
        </div>
        <div className="step">
          <div className="step-content">
            <h3>3</h3>
            <h2>Uploads automatically</h2>
            <p>Once youtuber approves ,video will be uploaded to his channel</p>
            <div className='image'>
              <img src={image3}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
