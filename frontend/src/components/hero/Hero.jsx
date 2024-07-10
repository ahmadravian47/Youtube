import React from 'react';
import './Hero.css';
import h_pic from './hero4.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  //checking if somehow portal button is showing make it display none   + also the notification icon
  const portalButton = document.querySelector('button.portal-button');
  if (portalButton) {
    portalButton.style.display = 'none';
  }
  const notification_icon = document.querySelector('.fa-bell');
  if (notification_icon) {
    console.log(notification_icon)
    notification_icon.style.display = 'none';
  }

  //to make sure login button display is block 
  let navbar_login_button = document.querySelector('.navbar-get-started');
  if(navbar_login_button){
  navbar_login_button.style.display = 'block';
  }
    return (
        <div className="herosection">
            <div className="leftsection">
                <h1>Your fastest path to production</h1>
                <p>Edit, and upload your videos with unparalleled ease – from your editor to your Youtube channel.</p>
                <div className="hero-buttons">
                    <Link to='/signup' id="primary">Get Started</Link>
                    <Link to='https://www.linkedin.com/in/ahmad-touseef-996788205/' id="secondary">Contact Developer</Link>
                </div>
            </div>
            <div className='rightsection'>
              <img src={h_pic}></img>
            </div>
        </div>
    );
};

export default Hero;
