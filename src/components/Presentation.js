import React from 'react'

import './Header.scss'
import './Presentation.css'

import "aos/dist/aos.css";

const Presentation = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000, once: false });
    // }, [])
    return (
        <div data-aos="fade-up" data-aos-offset="150">
            <div className="bar-mid-top"></div>
            <div className="bar-title2">
                <p className="text-title inside" style={{color: '#d4c5a8'}}>THE PROJECT</p>
            </div>
            <div className="bar-mid" style={{height: '620px'}}>
                <div style={{display: 'flex', flexDirection: 'row', maxWidth: '1150px'}}>
                    <div className="decimal-text inside"></div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0'}}>NFT</p>
                        <div style={{display: 'flex'}}>
                            <p className="text-paragraph2" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din'}}>The Crazy Camels is a collection of 2’000 Non Fungible Tokens (NFT). The Camels are stored as ERC- tokens on the Ethereum Blockchain and hosted on IPFS. Each Crazy Camel is 100% unique and is programmatically generated from + hand-drawn traits. Each Crazy Camel comes with a membership to The Tribe - an exclusive group with wonderful perks.</p>
                            <div className="card-to-rotate"></div>
                            <div className="card-to-rotate2"></div>
                        </div>
                        <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0', paddingTop: '40px'}}>OPENSEA</p>
                        <p className="text-paragraph2" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din'}}>The Crazy Camels is a collection of 2’000 Non Fungible Tokens (NFT). The Camels are stored as ERC- tokens on the Ethereum Blockchain and hosted on IPFS. Each Crazy Camel is 100% unique and is programmatically generated from + hand-drawn traits. Each Crazy Camel comes with a membership to The Tribe - an exclusive group with wonderful perks.</p>

                    </div>
                </div>
            </div>
            <div className="bar-bottom"></div>
        </div>
    )
}

export default Presentation
