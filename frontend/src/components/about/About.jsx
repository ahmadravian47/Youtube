import React from 'react'
import h_pic from '../hero/hero4.png'
import { Link } from 'react-router-dom';
import './About.css'

export default function About() {
  return (
       <div className="herosection">
            <div className="leftsection">
                <h1>About Me</h1>
                <p className='p'>Hello, I'm Ahmad, the sole creator of this app. I enjoy solving 
                    people's problems by developing web applications, just like I did
                     with this one. I have strong expertise in working with the MERN
                      stack. If you have a product idea and would like me to collaborate
                       on it, please feel free to reach out to me.</p>
                <div className="hero-buttons">
                    <Link to='/signup' id="primary">My Portfolio</Link>
                    <Link to='/signup' id="secondary">My Linkedin</Link>
                </div>
            </div>
            <div className='rightsection'>
              <img src={h_pic}></img>
            </div>
        </div>
  )
}
