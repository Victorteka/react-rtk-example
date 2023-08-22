import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css';

const Layout = () => {
  return (
    <div className='appContent'>
        <h1 style={{textAlign:'center'}}> Posts app</h1>
        <Outlet />
    </div>
  )
}

export default Layout