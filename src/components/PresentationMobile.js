import React from 'react'

import './Header.css'
import './Presentation.css'

const PresentationMobile = () => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000, once: false });
    // }, [])
    return (
        <div style={{height: '1000px', paddingTop: '30px'}}>
            <div className="bar-title2">
                <p className="text-title inside" style={{color: '#d4c5a8'}}>A FULL COLLECTION OF NFT</p>
            </div>
            <div className="bar-mid" style={{height: '620px'}}>
                <div className="toppixel"></div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        {/* <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0'}}>NFT</p> */}
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <p className="text-paragraph2" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din', textAlign: 'justify'}}>The Crazy Camels is a collection of 2’000 Non Fungible Tokens (NFT). The Camels are stored as ERC- tokens on the Ethereum Blockchain and hosted on IPFS. Each Crazy Camel is 100% unique and is programmatically generated from + hand-drawn traits. Each Crazy Camel comes with a membership to The Tribe - an exclusive group with wonderful perks.</p>
                        </div>
                        {/* <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0', paddingTop: '40px'}}>OPENSEA</p> */}
                        {/* <p className="text-paragraph2" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din'}}>The Crazy Camels is a collection of 2’000 Non Fungible Tokens (NFT). The Camels are stored as ERC- tokens on the Ethereum Blockchain and hosted on IPFS. Each Crazy Camel is 100% unique and is programmatically generated from + hand-drawn traits. Each Crazy Camel comes with a membership to The Tribe - an exclusive group with wonderful perks.</p> */}
                    </div>
                </div>
                <div className="botpixel"></div>
                <div style={{width: '100%', height: '100%', left: '50%'}}>
                    <div className="card-to-rotate"></div>
                    <div className="card-to-rotate2"></div>
                </div>
            </div>
            {/* <div className="bar-bottom"></div> */}
        </div>
    )
}

export default PresentationMobile