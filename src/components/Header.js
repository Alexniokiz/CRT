import React, { useEffect } from 'react'
import "./Header.scss"

import Socials from './Socials';

import logo from '../assets/logo.png'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Header = () => {
    useEffect(() => {
        var testContainer = document.getElementsByClassName('awssld__content');
        console.log(testContainer[0].getElementsByClassName('container-main'))
      }, []);
    // var child = testContainer.getElementsByClassName('container-main');
    useEffect(() => {
        // console.log(testContainer.getElementsByClassName('container-main')[0])
    })
    return (
        <>
            <div className="bar-title">
                <div className="container-nav">
                    <div style={{display: "flex"}}>
                        <img src={logo} alt="logo" className="title"></img>
                        <p style={{paddingLeft: "16px"}} className="title">TRILLIONAIRE THUGS</p>
                    </div>
                    <Socials />
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', minWidth: 'max-content'}}>
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
                                <span style={{fontSize: "175px", color: "black"}}>7777</span>
                                <span style={{fontSize: "95px", color: "white"}}>UNIQUE</span>
                                <span style={{fontSize: "140px", color: "white"}}>NFTS</span>
                                {/* <div className="glitch" style={{fontSize: "186px", color: "white"}}>
                                    <span>NFT</span>
                                    NFT
                                    <span>NFT</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="container-main2">
                            <div className="text-main" style={{paddingTop: '230px'}}>
                                <span style={{fontSize: "96px", color: "black"}}>RELEASE</span>
                                <span style={{fontSize: "115px", color: "white"}}>END OF</span>
                                <span style={{fontSize: "87px", color: "white"}}>JANUARY</span>
                            </div>
                        </div>
                        <div className="container-main3">
                            <div className="text-main">
                                <span style={{fontSize: "171px", color: "black"}}>GET</span>
                                <span style={{fontSize: "85px", color: "white"}}>ACCESS</span>
                                <span style={{fontSize: "95px", color: "white"}}>TO THE</span>
                                <span style={{fontSize: "63px", color: "white"}}>WHITELIST</span>
                            </div>
                        </div>
                        {/* <div className="container-main4">
                            <div className="text-main">
                                <span style={{fontSize: "171px"}}>GET</span>
                                <span style={{fontSize: "85px", color: "white"}}>ACCESS</span>
                                <span style={{fontSize: "95px", color: "white"}}>TO THE</span>
                                <span style={{fontSize: "63px", color: "white"}}>WHITELIST</span>
                            </div> */}
                        {/* </div> */}
                    </AutoplaySlider>
                <div className="container-right">
                </div>
            </div>
            <div className="bar-mid" style={{height: "20px"}}></div>
            <div className="bar-title2">
                <p className="text-title">GET READY THUGS!</p>
            </div>
            <div className="bar-mid">
                <p className="text-paragraph">Trillionaire Thugs is a collection of 7,777 NFTs, each representing a Thug as a digitized piece of 3D art. With more than 300 traits in 3D, our collection will be one of the most diverse and detailed on the market. Our goal is to build a community around the hype of the hip hop universe. The models to follow are no longer in suits, but in sneakers, their crypto wallets often being more loaded!</p>
            </div>
            <div className="bar-bottom"></div>
        </>
    )
}

export default Header;