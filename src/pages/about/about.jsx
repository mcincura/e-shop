import React from 'react';
import "./about.css"
import "../../universal/universal.css"

const About = () => {
    return(
        <div className='main-content'>
            <div className='about-section1'>
                <h1>Welcome to <span className='arabic-font'>Alladin</span></h1>
                <p>The Magic of {/*<span className='arabic-font'>*/}Arabic{/*</span>*/} Teas!</p>
                <div className='about-section1-1'>
                    <div className='about-section1-1-text'>
                        <h2>At Alladin, we believe in the timeless traditions of tea culture from across the Arab world.</h2>
                    </div>
                </div>
                <div className='about-section1-2'>
                    <p>From the vibrant souks of Marrakech to the ancient tea rituals of the Middle East.</p>
                    <img src='' alt=''/>
                </div>
                <div className='about-section1-3'>
                    <p>We bring a curated selection of authentic, aromatic blends that capture the essence of this rich heritage.</p>
                    <img src='' alt=''/>
                </div> 
                <div className='about-section1-4'>
                    <p>Whether you're seeking a moment of relaxation or a taste of adventure.</p>
                    <img src='' alt=''/>
                </div>
                <div className='about-section1-5'>
                    <p>Our teas offer a journey through the exotic flavors and time-honored customs of Arabia.</p>
                    <img src='' alt=''/>
                </div>  
                <div className='about-section1-5'>
                    <p>Join us in celebrating the magic of tea, one cup at a time.</p>
                    <img src='' alt=''/>
                </div>                                                                              
            </div>
        </div>
    )
};

export default About