import React, { useState } from 'react';
import './Signup.css';
import h_pic from '../../assets/hero.png';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('youtuber');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://youtube-phi-amber.vercel.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role }), // Include role
        credentials: 'include'
      });

      if (response.status === 200) { //then go to user portal
        localStorage.setItem('email', email);
        navigate("/user");
      } else {
        alert('Email Already registered');
      }
    } catch (error) {
      // Handle error
      console.error('Err', error);
    }
  };
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
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleNameChange}
                placeholder="John Smith"
                style={{ width: '100%', padding: '0.5em' }}
                required
              />
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

              <label>Role</label>
              <select
                name="role"
                value={role}
                onChange={handleRoleChange}
                style={{ width: '100%', padding: '0.5em' }}
                required
              >
                <option value="youtuber">Youtuber</option>
                <option value="editor">Editor</option>
              </select>

              <button type="submit" style={{ width: '100%', padding: '0.75em', backgroundColor: 'black', color: 'white', marginTop: '2rem' }}>
                Create Account
              </button>
            </form>

            <div style={{ marginTop: '1em' }}>
              Already have an account? <Link to='/login' className='login-button'>Sign in</Link>
            </div>
          </div>
        </div>
        <div className='right'>
          <img src={h_pic} alt="Hero"></img>
        </div>
      </div>
    </>
  );
};

export default Signup;
