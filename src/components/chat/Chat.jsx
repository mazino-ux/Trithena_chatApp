/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react'

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = e => {
    setText (prev => prev + e.emoji)
  }

  return (
    <div className='chat'>
      <div className="top">

        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jesus🔥</span>
            <p>I am the Way, the Truth and the Light💡✨!</p>
          </div>
        </div>

        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

{/* &&&&&&&&&&&&&&&&&&&&&&& CENTER &&&&&&&&&&&&&&&&&&&&&& */}
      <div className="center">

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Hey! Just wanted to remind you that you're never alone. Keep the faith and stay strong😊.</p>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Thank you so much Jesus, Son of God, my deraest brother and sweet friend.</p>
            <span>2 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Whenever you feel worried, weary, or anxious, turn to me in prayer. I'm here to guide and support you through every challenge.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
          <img src="https://img.freepik.com/premium-photo/girl-with-purple-hair-is-holding-purple-laptop_477294-84.jpg?w=360" alt="" />
            <p>Sure my Lord!. You're the best, so caring and loving! </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <img src="https://img.freepik.com/free-photo/medium-shot-cartoony-jesus-christ_23-2150972274.jpg?t=st=1724480360~exp=1724483960~hmac=aa2460dbc05058537fef123f052a1c3b79150caeef3c1020de848482aceef85a&w=740" alt="" />
            <p>Aww.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>I truly don't know what i have done to deserve such love which you have given to me.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>


{/* &&&&&&&&&&&&&&&&&&&&&&& BOTTOM &&&&&&&&&&&&&&&&&&&&&& */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message...' 
          onChange={e=>setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <img src="./emoji.png" 
            alt="" 
            onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat