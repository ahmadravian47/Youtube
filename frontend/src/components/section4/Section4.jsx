import React from 'react'
import './Section4.css'
import { Link } from 'react-router-dom';

export default function Section4() {
    return (
        <div className='section'>
            <div className='box'>
                <h1>Have a project in mind ?</h1>
                <h3>I will be your Full Stack Engineer  </h3>
            </div>
                <Link to='https://www.linkedin.com/in/ahmad-touseef-996788205/' id="primary">Contact me</Link>
        </div>
    )
}
