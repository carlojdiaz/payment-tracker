import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
        <div className='nav-container'>
                <h1>Payment Tracker</h1>
            <div className='nav-items'>
                <li><a>Make Payment</a></li>
                <li><a>Recent History</a></li>
                <li><a>Calendar</a></li>
            </div>
        </div>
        </>
    )
}

export default Navbar
