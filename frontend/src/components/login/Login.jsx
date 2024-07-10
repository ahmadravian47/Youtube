import React, { useState } from 'react';
import './Login.css'
import h_pic from '../../assets/hero.png'
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://youtube-phi-amber.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });

      if (response.status == 200)//then go to user portal
      {
        localStorage.setItem('email', email);
        navigate("/user");
      }
      else {
        alert('Email / Passowrd not correct');
      }
    }
    catch (error) {
      // Handle error
      console.error('Err')

    }
  }
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
    <>
      <div className="hero">
        <div className="left">
          <div className='stupid'>
            <h2>Sign in to TubeX</h2>
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="your@email.com"
                style={{ width: '100%', padding: '0.5em' }}
                required
              />

              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="correct horse battery staple"
                style={{ width: '100%', padding: '0.5em' }}
                required
              />

              <button type="submit" style={{ width: '100%', padding: '0.75em', backgroundColor: 'black', color: 'white', marginTop: '1rem' }}>
                Login
              </button>
            </form>

            <div style={{ marginTop: '1em' }}>
              Not have an account? <Link to='/signup' className='but'>Sign up</Link>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={h_pic}></img>
        </div>

      </div>
    </>
  );
};

export default Signup;
