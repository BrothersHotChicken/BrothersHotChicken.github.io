import React from 'react';
import pic from './sando.jpg'
import './Hero.css'

function Hero(){
    return <section id='Hero'>
        <img src={pic} className="HeroImage" alt="Coffee Shop" />
        <div className='HeroTextContainer'>
            <h1 className='HeroTitle'>{"Brothers\nHot\nChicken"}</h1>
        </div>
    </section>
}

export default Hero;