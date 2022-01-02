import React, { useEffect } from 'react'
import "./Header.scss"

import Faq from "react-faq-component";

import AOS from 'aos';
import "aos/dist/aos.css";

const data = {
    rows: [
        {
            title: <p style={{fontFamily: "Din"}}>What is an NFT ?</p>,
            content: <p style={{fontFamily: "Din"}}>NFT stands for 'non-fungible token.' An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.</p>,
        },
        {
            title: <p style={{fontFamily: "Din"}}>When is the launch ?</p>,
            content:<p style={{fontFamily: "Din"}}>The public mint will start on November 15, 9PM EST. Pre-sale will happen on November 14, 6PM EST.</p>,
        },
        {
            title: <p style={{fontFamily: "Din"}}>How Can I Get an NFT?</p>,
            content: <p style={{fontFamily: "Din"}}>It will be available for purchase on our website through an initial sale. At the time of purchase, a randomly selected NFT will be minted on the blockchain and delivered to your wallet and OpenSea account. Once it is sold out, you can get a Crazy Camel on the secondary market (on OpenSea) only.</p>,
        },
        {
            title: <p style={{fontFamily: "Din"}}>How to Purchase One?</p>,
            content: <p style={{fontFamily: "Din"}}>The easiest way is to install a MetaMask extension in your Chrome browser and link your Ethereum wallet to it. Ensure you have enough ETH in your wallet to cover the cost of a NFT plus the associated transaction (gas) fees. Approve the transaction on MetaMask and you are all set. The Crazy Camels will be available to mint on : thecrazycamels.com only.</p>,
        },
    ],
};

const styles = {
    bgColor: 'transparent',
    titleTextColor: "white",
    rowTitleColor: "white",
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
                {/* <div className="bar-title2"> */}
                        <p className="text-title inside" style={{color: '#d4c5a8'}}>FAQ</p>
                    {/* </div> */}
                {/* <div className="bar-mid"> */}
                    <div style={{display: "flex"}}>
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
