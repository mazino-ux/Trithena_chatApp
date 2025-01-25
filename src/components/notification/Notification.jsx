/* eslint-disable no-unused-vars */
import React from 'react'
import "./notification.css"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function Notification() {
  return (
    <div className=''>
        <ToastContainer position= "bottom-right"></ToastContainer> 
    </div>
  )
}

export default Notification