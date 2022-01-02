import React, { useEffect } from 'react'
import "./Header.scss"

import Faq from "react-faq-component";

import AOS from 'aos';
import "aos/dist/aos.css";

const data = {
    rows: [
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>What is Trillionaire Thugs?</h2>,
            content: <p style={{fontFamily: "Din"}}>By creating Trillionaire Thugs, our goal is to bring the hip hop and urban scene to the NFTs market. Our characters are thugs that evolve in a hype Universe and that have been digitized by talented artists to bring them alive in the Metaverse.</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>How much is a Trillionaire Thugs NFT?</h2>,
            content:<p style={{fontFamily: "Din"}}>The cost of each piece on mint day will be 0.3 Eth + gas fee. The purchase will be limited to two pieces per wallet.</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>When is the mint expected?</h2>,
            content: <p style={{fontFamily: "Din"}}>The mint is expected to happen at the end of January. You are welcome to join our Discord group, in which we will communicate the exact mint date and other useful details related to Trillionaire Thugs. </p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>How can I mint?</h2>,
            content: <p style={{fontFamily: "Din"}}>On mint day, a button CONNECT YOUR WALLET will be displayed on our official website only. Simply click on it and make sure you are on the Ethereum network to start minting.</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>What is the supply for this collection?</h2>,
            content: <p style={{fontFamily: "Din"}}>A total of 7,777 will be available on mint day.</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>On which network is Trillionaire Thugs?</h2>,
            content: <p style={{fontFamily: "Din"}}>Trillionaire Thugs will use the Ethereum network, and the collection will be hosted on Opensea.</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>How do I get whitelisted</h2>,
            content: <p style={{fontFamily: "Din"}}>There are many ways to get whitelisted, however there is a limited number of tickets! Please join our Discord to get more information.</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>How can I be part of the club?</h2>,
            content: <p style={{fontFamily: "Din"}}>To be part of the club, you need to hold at least one piece of the collection. The club will give you access to many exciting rewards and awesome events.</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>How will Trillionaire Thugs be connected to the Metaverse?</h2>,
            content: <p style={{fontFamily: "Din"}}>Our project is to get the NFTs connected to a future game in the Metaverse in which the holders will  get rewarded with ingame benefits. Stay tuned this year!</p>,
        },
        {
            title: <h2 style={{fontFamily: "Din", fontSize: "26px"}}>Do I own the intellectual property rights of Trillionaire Thugs?</h2>,
            content: <p style={{fontFamily: "Din"}}>By buying your NFT, on the first or second market, you will own all intellectual property rights on your NFT.</p>,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "white",
    rowTitleColor: "white",
    titleTextSize: "36px",
    // rowContentPaddingLeft: '40px',
    rowContentColor: 'white',
    arrowColor: "white",
    rowTitleTextSize: '30px',
    rowContentTextSize: '18px'
};

const FaqSection = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <>
        {
        window.innerWidth > 900 ?
            <div data-aos="fade-up" data-aos-offset="200">
                <div className="bar-mid-top"></div>
                <div className="bar-title2">
                        <p className="text-title inside" style={{color: '#d4c5a8'}}>FAQ</p>
                    </div>
                <div className="bar-mid">
                    <div style={{display: "flex", maxWidth: '1150px'}}>
                        <div className="decimal-text inside"></div>
                        <Faq data={data} styles={styles}/>
                    </div>
                </div>
                <div className="bar-bottom"></div>
            </div>
            : 
            <>
            {/* <div className="bar-mid-top"></div> */}
                <div className="bar-title2">
                    <p className="text-title inside" style={{color: '#d4c5a8'}}>FAQ</p>
                </div>
                {/* <div className="bar-mid"> */}
                    <div style={{display: "flex", padding: "0 30px"}}>
                        {/* <div className="decimal-text inside"></div> */}
                        <Faq data={data} styles={styles}/>
                    </div>
                {/* </div> */}
                {/* <div className="bar-bottom"></div> */}
            </>
        }
        </>
    )
}

export default FaqSection
