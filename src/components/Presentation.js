import React from 'react'
import './Header.css'
import './Presentation.css'
const Presentation = () => {
    return (
        <>
            <div className="bar-mid-top"></div>
            <div className="bar-title2">
                <p className="text-title inside" style={{color: 'white'}}>ROADMAP</p>
            </div>
            <div className="bar-mid" style={{height: '1600px'}}>
                <div className="card-to-rotate"></div>
                <div className="card-to-rotate2"></div>
            </div>
            <div className="bar-bottom"></div>
        </>
    )
}

export default Presentation
