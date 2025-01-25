/* eslint-disable no-unused-vars */
import React from 'react'
import "./userInfo.css"

function Userinfo() {
  return (
    <div className='userInfo'>
        <div className="user">
            <img src="/avatar.jpg" alt="" />
            <h2>Math Uriel</h2>
        </div>
        <div className="icons">
            <img src="/more.png" alt="" />
            <img src="/video.png" alt="" />
            <img src="/edit.png" alt="" />
        </div>
    </div>
  )
}

export default Userinfo