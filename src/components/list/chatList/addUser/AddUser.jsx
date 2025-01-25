/* eslint-disable no-unused-vars */
import React from 'react'
import "./addUser.css"

function AddUser() {
  return (
    <div className='addUser'>
        <form action="">
            <input type="text" name='username' placeholder='Username' />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="detail">
                <img src="/avatar.jpg" alt="" />
                <span>Holy Spirit</span>
            </div>
            <button>Add User</button>
        </div>
    </div>
  )
}

export default AddUser