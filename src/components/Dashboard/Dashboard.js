import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-navbar'><Navbar /></div>
      <div className='dashboard-body'><Home /></div>
    </div>
  )
}

export default Dashboard;