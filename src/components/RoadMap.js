import React, {useEffect, useState, useRef} from 'react';
import './Header.css';
import './RoadMap.css';

const RoadMap = () => {
    const [scroll, setScroll] = useState(0)
    const [width, setWidth] = useState(0)
    const div = document.getElementsByClassName('progress-empty').getBoundingClientRect;
    useEffect(() => {
        window.onscroll = () => {
            setScroll(window.pageYOffset)
        }
    })
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
                        <div className="progress-empty"></div>
                        <div  ref={
                            el => {
                                if (!el) return;
                                if (el.getBoundingClientRect().y < 420 && el.getBoundingClientRect().y > -115) {
                                    setWidth(440 - el.getBoundingClientRect().y)
                                } else if (el.getBoundingClientRect().y > 420) {
                                    setWidth(0)
                                } else if (el.getBoundingClientRect().y < -115) {
                                    setWidth(531)
                                }
                            }
                        } className="progress-full" style={{height: width+'px'}}></div>
                    </div>
                </div>
            </div>
            <div className="bar-bottom"></div>
        </div>
    )
}

export default RoadMap
