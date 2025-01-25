/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import "./login.css";

import React, { useState } from 'react'

function Login() {

    const [avatar, setAvatar] = useState({
        file: null,
        url: "",
    })

    const handleAvatar = e => {
        if (e.target.files[0]){

            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = e =>{
        e.preventDefault()
        toast.success("Hello, Logged in successfully!!")
    }

  return (
    <div className="login">
        <div className="item">
            <h2>Welcome Back!!</h2>
            <form action="" onSubmit={handleLogin}>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </div>


        <div className="separator"></div>


        <div className="item">
            <h2>Create an Account</h2>
             <form action="">
                <label htmlFor="file"><img src={avatar.url || "/avatar.jpg"} alt="" />
                Upload an Image</label>                
                <input type="file" name="file" id="file" style={{display: "none"}} onChange={handleAvatar} />
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
        </div>

        <div className="mobile-view">
            <div className="item">
            <h2>Welcome Back!!</h2>
            <form action="" onSubmit={handleLogin}>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <button>Sign In</button>
            </form>
            </div>
        </div>
         
    </div>
  )
}

export default Login


// gsharp
// 