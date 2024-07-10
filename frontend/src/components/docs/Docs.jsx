import React from 'react'
import './Docs.css'

export default function Docs() {
  return (
    <div className='docs'>
      <h1>TubeX Documentation</h1>
      <div className='boxes'>
        <div className='box box1'>
          <div className='purple'></div>
          <h3>For Youtuber</h3>
          <p>As a Youtuber , you need to follow the below steps :</p>
          <ul>
            <li>First you will need to <span>signup/login</span> to the website</li>
            <li>After authentication ,you will need to <span>connect</span> with the editor. To connect either you will send
              request or editor needs to send request to you </li>
            <li>By Clicking on the <span> notification icon </span> you will see all the requests which editors sent to you </li>
            <li>Now once you are connected with your editor ,he will be able to send your edited videos to our platform
              and once the video is on our platform ,after taking your approval it will be uploaded on Youtube </li>
          </ul>
        </div>
        <div className='box box2'>
          <div className='purple'></div>
          <h3>For Editor</h3>
          <p>As an Editor , you need to follow the below steps :</p>
          <ul>
            <li>First you will need to <span>signup/login</span> to the website</li>
            <li>After authentication ,you will need to <span>connect</span> with the youtuber. To connect either you will send
              request or youtuber needs to send request to you </li>
            <li>By Clicking on the <span> notification icon </span> you will see all the requests which youtubers sent to you </li>
            <li>After connecting with your youtuber , you can <span>upload</span>  the edited video on our platform and we will upload
              on youtuber's channel with his approval</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
