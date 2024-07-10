
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Editorportal.css'

export default function editorportal() {
  const [allConnections, setConnections] = useState([]);
  const [user_id,setid]=useState('');
  const [user_type,settype]=useState('');
  const [form, setForm] = useState({
    title: "",
    description: "",
    file: null,
    youtuber: "",
    editor:"",
  });

  function handleChange(event) {
    const inputValue = event.target.name === "file" ? event.target.files[0] : event.target.value;
    setForm({ ...form, [event.target.name]: inputValue });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const videoData = new FormData();
    videoData.append('videoFile', form.file);
    videoData.append('title', form.title);
    videoData.append('description', form.description);
    videoData.append('youtuber', form.youtuber);
    videoData.append('editor', user_id);

    console.log(videoData);
    axios.post('http://localhost:3000/upload', videoData)
      .then(response => {
        console.log('Response:', response);
        alert('Video Uploaded');
      })
      .catch(error => {
        console.error('Error uploading video:', error);
      });
  }

  async function getAllConnections() {
    fetch('http://localhost:3000/allconnections', {
      credentials: 'include'
    })
      .then(r => r.json())
      .then(res => {
        console.log(res);
        setConnections(res);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }

  function getProfile() {
    fetch('http://localhost:3000/profile', {
      credentials: 'include'
    })
      .then(r => r.json())
      .then(res => {
        setid(res.id);
        settype(res.type);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }

  useEffect(() => {
    let navbar_login_button=document.querySelector('.navbar-get-started');
    navbar_login_button.style.display='none';
    getAllConnections();
    getProfile();
  }, []);

    //------------hiding buttons-------------------//

    const navbar_login_button = document.querySelector('.navbar-get-started');
    if (navbar_login_button) {
      navbar_login_button.style.display = 'none';
    }

    let portalButton = document.querySelector('button.portal-button');
    if(portalButton){
    portalButton.style.display = 'none';
    }
  
    //-------------showing buttons-------------------//

  
    let notification_icon = document.querySelector('.fa-bell');
    if(notification_icon){
    notification_icon.style.display = 'block';
    }
  
  return (
    <div id='ep'>
      <h1>Upload YouTube Video</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="title" onChange={handleChange} autoComplete="off" placeholder="Title" />
        </div>
        <div>
          <textarea type="text" name="description" onChange={handleChange} autoComplete="off" placeholder="Description" />
        </div>
        <div>
          <input type="file" name="file" onChange={handleChange} accept='video/mp4' placeholder="Add Video File" />
        </div>
        <div>
          <select
            name="youtuber"
            style={{ width: '100%', padding: '0.5em' }}
            onChange={handleChange} // Add onChange handler to update form state
            required
          >
            <option value="">Select a youtuber</option>
            {allConnections.map(connection => (
              <option key={connection.name} value={connection.email}>{connection.name}</option>
            ))}
          </select>
        </div>
        <button type='submit'>Upload Video</button>
      </form>
    </div>
  );
}

