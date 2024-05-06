import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import '../assets/css/dashboard.css'

const Dashboard=()=> {
  return (
    <>
    <div>
      <Navbar/>
      <div className="dashboard">
        <div className="sidebar-container">
            <Sidebar/>
        </div>
        <div className="contact-container">
            <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard