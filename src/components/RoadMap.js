import React, {useEffect, useState, useRef} from 'react';
import './Header.css';
import './RoadMap.css';

import AOS from 'aos';
import "aos/dist/aos.css";

const RoadMap = () => {
    const [scroll, setScroll] = useState(0)
    const [width, setWidth] = useState(0)
    const div = document.getElementsByClassName('progress-empty').getBoundingClientRect;
    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.pageYOffset)
        }
    })
    useEffect(() => {
        AOS.init({ duration: 1000, delay: 300, once: true });
    }, [])
    return (
        <div>
            <div className="bar-mid-top"></div>
            <div className="bar-title2">
                <p className="text-title inside" style={{color: 'white'}}>ROADMAP</p>
            </div>
            <div className="bar-mid" style={{height: '2000px'}}>
                <div style={{display: 'flex', flexDirection: 'row', maxWidth: '1150px'}}>
                    <div className="decimal-text inside"></div>
                    <div>
                        <p className="phase-count" style={{paddingTop: '130px'}}>PHASE 1</p>
                        <p className="phase-count">PHASE 2</p>
                        <p className="phase-count">PHASE 3</p>
                        <p className="phase-count">PHASE 4</p>
                        <p className="phase-count">PHASE 5</p>
                    </div>
                    <div>
                        <div className="progress-empty"></div>
                        <div  ref={
                            el => {
                                if (!el) return;
                                console.log(el.getBoundingClientRect().y);
                                if (el.getBoundingClientRect().y < 720 && el.getBoundingClientRect().y > -275) {
                                    setWidth(720 - el.getBoundingClientRect().y)
                                } else if (el.getBoundingClientRect().y > 720) {
                                    setWidth(0)
                                } else if (el.getBoundingClientRect().y < -345) {
                                    setWidth(1005)
                                }
                            }
                        } className="progress-full" style={{height: width+'px'}}></div>
                    </div>
                    <div style={{paddingTop: '25px'}}>
                        <div data-aos="fade-left" className="carton"></div>
                        <div data-aos="fade-left"  className="carton"></div>
                        <div data-aos="fade-left"  className="carton"></div>
                        <div data-aos="fade-left"  className="carton"></div>
                        <div data-aos="fade-left"  className="carton"></div>
                    </div>
                </div>
            </div>
            <div className="bar-bottom"></div>
        </div>
    )
}

export default RoadMap
