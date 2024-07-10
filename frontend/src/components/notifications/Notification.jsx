
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Notification.css';

export default function User() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [id, setId] = useState('dummy');
    const [type, setType] = useState('');
    const [allUsers, setAllUsers] = useState([]);
    const [allrequests, setAllrequests] = useState([]);
    const [opposite_type, setopp] = useState();

    async function getProfile() {
        try {
            const response = await fetch('http://localhost:3000/profile', {
                credentials: 'include'
            });
            const res = await response.json();
            setName(res.name);
            setId(res.id);
            setType(res.type);
            console.log('Id setted', res.id);
            setopp(res.type === 'editor' ? 'Youtuber' : 'Editor');
            return res.id;
        } catch (err) {
            console.error('Error:', err);
        }
    }

    async function viewrequests(userId) {
        console.log('user id is', userId);
        try {
            const response = await fetch('http://localhost:3000/allrequests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idd: userId })
            });

            if (response.status === 200) {
                const data = await response.json();
                console.log('all requests', data);
                setAllrequests(data);
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    async function accept_request(sender_id) {
        console.log('Sender ID : ', sender_id);

        try {
            const response = await fetch('http://localhost:3000/acceptrequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sender_id, id })
            });

            if (response.status === 200) {
                alert('You are now a connection!');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    }

    useEffect(() => {
        async function fetchData() {
            const userId = await getProfile();
            if (userId) {
                viewrequests(userId);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='bod'>
            <div className='content'>
                <h2>Your Notifications</h2>
                <h4>Following people have sent connection request to you</h4>

                <div className='users'>
                    {allrequests.map(index => (
                        <div key={index._id} className='user'>
                            <div className='left'>
                                <h3>{index.name}</h3>
                                <h4>{opposite_type}</h4>

                            </div>
                            <div className='right'>
                                <button className='reqbt' onClick={(event) => {
                                     let button = event.target; 
                                     button.innerHTML = 'Accepted!';
                                     button.disabled = true;
                                     button.style.backgroundColor = '#8a05ff';
                                    accept_request(index._id)
                                }}>Accept Request</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
