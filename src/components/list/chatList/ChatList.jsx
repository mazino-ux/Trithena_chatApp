/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./chatList.css"

function ChatList() {
    const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatList'>
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='Search' />
            </div>

            <img src={addMode ? "./minus.png" : "./plus.png"} 
                alt="" 
                className='add'
                onClick={() => setAddMode((prev) => !prev)}
             />
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Jesus🔥</span>
                <p>I love you Trinity.</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Holy Spirit🤍✨</span>
                <p>I'm here to guide you.</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.jpg" alt="" />
            <div className="texts">
                <span>God.Father🥰🌹</span>
                <p>Follow my will. Love Abba....</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>SparkleEyes💎</span>
                <p>Hey Trinny.</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Sis💖✨</span>
                <p>#Receipt of ₦500 000 00...</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Dorcas Hannah💝</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default ChatList