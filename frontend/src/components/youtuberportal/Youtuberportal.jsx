import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Youtuberportal() {
  const [allnotifications, setAllnotifications] = useState([]);
  const [dummy, setdummy] = useState('');
  async function getusernotifications() {
    try {
      const response = await fetch('https://youtube-phi-amber.vercel.app/allnotifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ dummy })//putting dummy here
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log('all the pending video requets to you', data);
        setAllnotifications(data);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  }

  async function approve_video(editor_email, video_name) {
    axios.post('https://youtube-phi-amber.vercel.app/approve', { editor_email, video_name }, { withCredentials: true })
      .then(response => {
        console.log('response',response);
        if (response.data.authUrl) {
          window.location.href = response.data.authUrl;
        } else if (response.status === 200) {
          console.log('Everything Success !');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }

  async function delete_notification(video_name) {
    console.log('evideo name', video_name);
    axios.post('https://youtube-phi-amber.vercel.app/deletenotification', { video_name }, { withCredentials: true })
      .then(response => {
        if (response.status == 200) {
          console.log('Notification Deleted !');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }
  useEffect(() => {
    getusernotifications();
  }, []);
  return (
    <div className='bod'>
      < div className='content'>
        <h2>Your Videos</h2>
        <h4>Here you will see all the videos which your editors have uploaded and now require your approval to upload on youtube.</h4>

        <div className='users'>
          {allnotifications.map(index => (
            <div key={index} className='user'>
              <div className='left'>
                <h2>{index.editor_name}</h2>
                <h4>Editor</h4>
              </div>
              <div className='right'>

                <button className='reqbt' onClick={() => {
                  approve_video(index.email, index.video);//sending editor email
                  let button = document.querySelector('.reqbt');
                  button.innerHTML = 'Uploading on Youtube !'
                  delete_notification(index.video)

                }}>Approve</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
