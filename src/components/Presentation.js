import React, { useEffect } from 'react'

import './Header.css'
import './Presentation.css'

import AOS from 'aos';
import "aos/dist/aos.css";

const Presentation = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000, once: false });
    // }, [])
    return (
        <div data-aos="fade-up">
            <div className="bar-mid-top"></div>
            <div className="bar-title2">
                <p className="text-title inside" style={{color: 'white'}}>ROADMAP</p>
            </div>
            <div className="bar-mid" style={{height: '620px'}}>
                {/* <p>Lorem ipsum dolor sit amet, consectetur</p> */}
                <div data-aos="fade-right" className="card-to-rotate"></div>
                <div data-aos="fade-left" className="card-to-rotate2"></div>
            </div>
            <div className="bar-bottom"></div>
        </div>
    )
}

export default Presentation
