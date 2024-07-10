import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './User.css';

export default function User() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [id, setId] = useState('dummy');
  const [type, setType] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [allrequests, setAllrequests] = useState([]);
  const [opposite_type, setopp] = useState();
  let idd;
  let ttype;


  function getProfile() {
    fetch('http://localhost:3000/profile', {
      credentials: 'include'
    })
      .then(r => r.json())
      .then(res => {
        setName(res.name);
        setId(res.id);
        idd = res.id;
        setType(res.type);
        ttype = res.type;
        if (res.type === 'editor') {
          setopp('Youtuber');
        } else {
          setopp('Editor');
        }
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }
  async function getOppositeUsers() {
    try {
      const response = await fetch('http://localhost:3000/allusers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, id, type })
      });

      if (response.status === 200) {
        const data = await response.json();
        setAllUsers(data);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }
  async function send_request(receiver_id) {
    console.log('Receiver ID : ', receiver_id);
    console.log('Sender ID : ', id);

    try {
      const response = await fetch('http://localhost:3000/sendrequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, receiver_id })
      });

      if (response.status == 200) {
        alert('Requestion Sent !')
      }
    } catch (error) {
      console.log('Error:', error);
    }

  }
  async function viewrequests() {
    navigate('/notifications');
    // console.log(idd);
    // try {
    //   const response = await fetch('http://localhost:3000/allrequests', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ idd })
    //   });

    //   if (response.status == 200) {
    //     const data = await response.json();
    //     setAllrequests(data);
    //   }
    // } catch (error) {
    //   console.log('Error:', error);
    // }
  }
  function handleNavigation() {
    console.log('Type is ', ttype);
    if (ttype == 'youtuber') {
      navigate('/youtuberportal');
    } else {
      navigate('/editorportal');
    }
  }
  useEffect(() => {
    getProfile();
    // Hide the login button
    let navbar_login_button = document.querySelector('.navbar-get-started');
    navbar_login_button.style.display = 'none';

   // Select the navbar element
    let navbar_div = document.querySelector('.navbar-auth');

    // Check if the icon already exists
    if (!navbar_div.querySelector('.fa-bell')) {
      let icon = document.createElement('i');
      icon.classList.add('fa-solid', 'fa-bell');
      icon.addEventListener('click', viewrequests);
      navbar_div.appendChild(icon);
    }

    // Check if the portal button already exists
    if (!navbar_div.querySelector('button.portal-button')) {
      let portal_button = document.createElement('button');
      portal_button.classList.add('portal-button');
      portal_button.addEventListener('click', handleNavigation);
      portal_button.innerText = 'Your Portal';
      navbar_div.appendChild(portal_button);
    }

  }, []);

  useEffect(() => {
    if (name && id && type) { // Ensure getOppositeUsers only runs when profile data is loaded
      getOppositeUsers();
    }
  }, [name, id, type]);

  //------------hiding buttons-------------------//

  const navbar_login_button = document.querySelector('.navbar-get-started');
  if (navbar_login_button) {
    navbar_login_button.style.display = 'none';
  }

  //-------------showing buttons-------------------//
  let portalButton = document.querySelector('button.portal-button');
  if(portalButton){
  portalButton.style.display = 'block';
  }

  let notification_icon = document.querySelector('.fa-bell');
  if(notification_icon){
  notification_icon.style.display = 'block';
  }



  return (

    <div className='bod'>
      < div className='content'>
        <h2>Recommended Users</h2>
        <h4>From below find the persons ,you want to work with .You will need to send a request </h4>
        <div className='users'>
          {allUsers.map(user => (
            <div id={user._id} className='user'>
              <div className='left'>
                <h3>{user.name}</h3>
                <h4>{opposite_type}</h4>
              </div>
              <div className='right'>
                <button className='reqbt' onClick={(event) => {
                  let button = event.target;
                  button.innerHTML = 'Request Sent!';
                  button.disabled = true;
                  button.style.backgroundColor = '#8a05ff';
                  send_request(user._id);
                }}>Connect</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
