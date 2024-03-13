import React from 'react'
import homepic from './assets/home.jpg'
import './Home.css'

const home = () => {
  return (
    <>
        <section id='home'>
            <div className='home_container top'>
                <div className='company_name'>
                    <p className='name'>Lux's Camera's</p>
                </div>
                <div className='home_img'>
                    <img src={homepic}>
                    </img>
                </div>
            </div>
        </section>
    </>
  )
}

export default home