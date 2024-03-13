import React from 'react'
import aboutimg from './Assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <>
        <section id='about'>
            <div className='about top'>
                <h1 className='center_title'> ABOUT US </h1>
                <div className='info_container'>
                    <div>
                        <img src={aboutimg}>
                        </img>
                    </div>
                    <div>
                        <p className='about_info'>                            
                            Lux Cameras, founded by Luvuyo Tafeni and based in the picturesque city of Cape Town, 
                            stands as a prominent entity in the realm of photography, offering an array of cutting-edge 
                            cameras to capture life's most precious moments. With a commitment to providing the latest 
                            editions of cameras, Lux Cameras has become synonymous with quality and innovation in the 
                            photography industry.
                            As a company rooted in Cape Town's vibrant landscape, Lux Cameras embodies the spirit of 
                            the city's rich culture and artistic fervor. Their dedication to staying abreast of 
                            technological advancements ensures that customers have access to the most sophisticated 
                            and high-performance cameras available in the market.
                            Luvuyo Tafeni, the visionary founder of Lux Cameras, brings a passion for photography
                            and a keen understanding of the evolving needs of both amateur enthusiasts and 
                            professional photographers alike. Under his leadership, Lux Cameras has not only become a 
                            trusted name in the industry but has also established a community that shares a common love for 
                            capturing and preserving life's extraordinary moments.
                            Lux Cameras' commitment to customer satisfaction goes beyond providing state-of-the-art 
                            equipment. The company also offers personalized assistance, ensuring that each customer 
                            finds the perfect camera to match their unique preferences and needs. This customer-centric 
                            approach has helped Lux Cameras build lasting relationships within the Cape Town community and beyond.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About