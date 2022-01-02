import React from 'react'

import './Header.scss'
import './Presentation.css'

const PresentationMobile = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000, once: false });
    // }, [])
    return (
        <div style={{paddingTop: '30px'}}>
            <div class="bar-title2">
                <p class="text-title inside" style={{color: "rgb(212, 197, 168)"}}>A FULL COLLECTION OF NFT</p>
            </div>
            <div class="bar-mid">
                <div class="toppixel"></div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p class="text-paragraph2" style={{maxWidth: "500px", paddingTop: "20px", fontFamily: "Din", textAlign: "justify"}}>The Crazy Camels is a collection of 2’000 Non Fungible Tokens (NFT). The Camels are stored as ERC- tokens on the Ethereum Blockchain and hosted on IPFS. Each Crazy Camel is 100% unique and is programmatically generated from + hand-drawn traits. Each Crazy Camel comes with a membership to The Tribe - an exclusive group with wonderful perks.</p>
                        </div>
                    </div>
                </div>
                <div class="botpixel"></div>
                <div style={{width: "100%", height: "100%", left: "50%"}}></div>
            </div>
            <div style={{width: '100%', height: '450px', left: '50%'}}>
                <div className="card-to-rotate"></div>
                <div className="card-to-rotate2"></div>
            </div>
        </div>
    )
}

export default PresentationMobile