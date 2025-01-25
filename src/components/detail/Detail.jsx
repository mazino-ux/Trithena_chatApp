/* eslint-disable no-unused-vars */
// import React from 'react'
import "../detail/detail.css"
const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="https://img.freepik.com/premium-photo/temptation-jesus_841404-10.jpg?w=360" alt="" />
        <h2>Jesus🔥</h2>
        <p>I am the Way, the Truth and the Light💡✨!</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="/arrowDown.png" alt="" />
          </div>
        </div>
        {/* https://img.freepik.com/premium-photo/woman-with-purple-hair-purple-hair-is-wearing-purple-shirt-with-purple-purple-hair_1081462-30619.jpg?w=360 */}
        {/* ------PHOTOS------- */}
        <div className="photos">

          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://img.freepik.com/premium-photo/doll-with-purple-hair-purple-hat-sweater_1150321-1190.jpg?w=360" alt="" />
              <span>ph_2024_2.png</span>
            </div>
            <img src="/download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://img.freepik.com/premium-photo/doll-with-purple-hair-purple-hat-sweater_1150321-1190.jpg?w=360" alt="" />
              <span>ph_2024_2.png</span>
            </div>
            <img src="/download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://img.freepik.com/premium-photo/doll-with-purple-hair-purple-hat-sweater_1150321-1190.jpg?w=360" alt="" />
              <span>ph_2024_2.png</span>
            </div>
            <img src="/download.png" alt="" className="icon" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://img.freepik.com/premium-photo/doll-with-purple-hair-purple-hat-sweater_1150321-1190.jpg?w=360" alt="" />
              <span>ph_2024_2.png</span>
            </div>
            <img src="/download.png" alt="" className="icon" />
          </div>
          
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  )
}

export default Detail