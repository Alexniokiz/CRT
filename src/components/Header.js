import React from 'react'
import "./Header.css"

import Socials from './Socials';

import leftShadow from '../assets/left_big_img.png'
import mainImage1 from '../assets/big_img1.png'

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Header = () => {
    return (
        <>
            <div className="bar-title">
                <div className="container-nav">
                    <p className="title">CRT.</p>
                    <Socials />
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                {/* <img src={leftShadow}/>
                <img src={mainImage1}/>
                <img src={leftShadow}/> */}
                <div className="container-left">
                </div>
                    <AutoplaySlider play={true} buttons={true} interval={3000}>
                        <div className="container-main">
                            <div className="text-main">
                                {/* <div className="glitch" style={{fontSize: "158px"}}>
                                    <span>9999</span>
                                    9999
                                    <span>9999</span>
                                </div> */}
                                <span style={{fontSize: "160px", color: "black"}}>9999</span>
                                <span style={{fontSize: "95px", color: "white"}}>UNIQUE</span>
                                <span style={{fontSize: "185px", color: "white"}}>NFT</span>
                                {/* <div className="glitch" style={{fontSize: "186px", color: "white"}}>
                                    <span>NFT</span>
                                    NFT
                                    <span>NFT</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="container-main2">
                            <div className="text-main">
                                <span style={{fontSize: "158px"}}>15</span>
                                <span style={{fontSize: "95px", color: "white"}}>DAYS</span>
                                <span style={{fontSize: "55px", color: "white"}}>BEFORE</span>
                            </div>
                        </div>
                        <div className="container-main3">
                            <div className="text-main">
                                <span style={{fontSize: "158px"}}>15</span>
                                <span style={{fontSize: "95px", color: "white"}}>DAYS</span>
                                <span style={{fontSize: "86px", color: "white"}}>BEFORE</span>
                            </div>
                        </div>
                    </AutoplaySlider>
                <div className="container-right">
                </div>
            </div>
        </>
    )
}

export default Header;