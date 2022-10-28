import React from 'react'
import Navbar from './Navbar';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-navbar'><Navbar /></div>
      <div className='dashboard-body'>Dashboard</div>
    </div>
  )
}

export default Dashboard;