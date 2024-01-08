import React from 'react'
import './Header.css'
import cartImg from './images/OIP.jpeg'
import profile from './images/WhatsApp Image 2024-01-08 at 07.55.37_11eba9e5.jpg'

function Header() {
  return (
    <>

    <nav className='nav'>
        <h1 className='sneakers'>snekers</h1>

        <ul className='navList'>
            <li><a>Collection</a></li>
            <li><a>Men</a></li>
            <li><a>Women</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>

        <div className='navImg'>
            <img src={cartImg}></img>
            <img src={profile}></img>
        </div>

    </nav>

    </>
  )
}

export default Header