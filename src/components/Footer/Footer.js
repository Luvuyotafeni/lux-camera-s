import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className='footer'>
            <div className='container'>
                <div>
                <label>Subscribe to newsletter</label>
                <div>
                <input type='email' placeholder='Enter your email' className='input'/>
                <button type='submit'>Subscribe</button>
                </div>
                </div>
                <div className='footer-links'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Cart</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
                </div>
                <div className='social-media'>
                <a href='#'><i className='bx bxl-facebook'></i></a>
                <a href='#'><i className='bx bxl-twitter'></i></a>
                <a href='#'><i className='bx bxl-instagram'></i></a>
                </div>
            </div>
        </footer> 
    </div>
  )
}

export default Footer