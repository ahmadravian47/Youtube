import React from 'react';
import './Section1.css';
import icons_image from './section1.png'


const Section1 = () => {
  return (
    <div className="banner">
      <div className='text'>
      <h2>This TubeX is built with MERN Stack</h2>
      </div>
      <div className="icons">
        <img src={icons_image}></img>
      </div>
    </div>
  );
};

export default Section1;
