import React, {useEffect} from 'react'

import './Header.scss'
import './Presentation.css'

import AOS from 'aos';
import "aos/dist/aos.css";
const paragraph = [
    {
        title: "TRILLIONAIRE THUGS",
        content: <p className="" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din', fontSize: '20px'}}>Trillionaire Thugs is a <b style={{color: "#f7c02e"}}>collection of 7,777 NFTs</b>, each representing a Thug as a digitized piece of 3D art. With more than <b style={{color: "#f7c02e"}}>300 traits in 3D</b>, our collection will be one of the most diverse and detailed. Our goal is to bring the hip hop and urban scene to the NFT market and build a <b style={{color: "#f7c02e"}}>community</b> around the <b style={{color: "#f7c02e"}}>hype of this universe</b>. The models to follow are no longer in suits, but in sneakers, their crypto wallets often being more loaded! Our characters who have been digitized by talented artists to give them life in the Metaverse. By joining the community, you may be making the best investment of your life, in this new financial era where being cool and rich is more compatible than ever!"</p>,
    },
    {
        title: "BE PART OF THE GANG!",
        content: <p className="" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din', fontSize: '20px'}}>Your NFT is both an <b style={{color: "#f7c02e"}}>investment</b> and a key that can open the doors to a <b style={{color: "#f7c02e"}}>premium community</b>, which is called <b style={{color: "#f7c02e"}}>Trillionaire Thugs’ Gang</b> and that will give you access to many exciting rewards and awesome events! Owning a Trillionaire Thug NFT means that, more than just owning a piece of art, you are <b style={{color: "#f7c02e"}}>part of a gang</b> which grants you access to various benefits that will grow over time such as Merch and a free NFT collection drop. The first two big events will come up in February 2022, following the launch of the collection,in Miami & Dubai. Everyone among the holders will have a chance to get tickets.</p>,
    },
    {
        title: "RARE & UNIQUES",
        content: <p className="" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din', fontSize: '20px'}}>Have you ever seen a gang without a boss? In any gang, you get respect and the benefits that go with it, by climbing the ladder. On mint day, you have a direct chance to <b style={{color: "#f7c02e"}}>become a Gold member without having to start from the bottom</b>. On mint day, you will have 5% chance to mint a Golden Thug, as <b style={{color: "#f7c02e"}}>390 pieces are randomly Golden</b>! Their owners will receive additional benefits when the NFTs are connected to the Metaverse. Just by holding you will get a reward from the crew! In addition to that, 10 Legendary NFTs that will make reference to the crypto world will complete the collection.</p>,
    },
    {
        title: "GAME & METAVERSE",
        content: <p className="" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din', fontSize: '20px'}}>Our goal is to connect the NFTs characters to the Metaverse by <b style={{color: "#f7c02e"}}>adding value to your NFT, both financially and practically</b>. As a digital identity, your NFT will simply and effectively represent you in the Metaverse, that will soon become our daily reality. When this will be available, our holders will be able to <b style={{color: "#f7c02e"}}>transfer the features of their NFTs to this online world</b> and embody their character, with all its specifications. A <b style={{color: "#f7c02e"}}>free new drop collection</b> will allow long term holders to access a collection of weapons that can be merged with the first collection, as an upgrade. This process will increase the value of your current NFT and add some functionality for the next stage of the project.</p>,
    }
]

const PresentationMobile = (props) => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, [])
    return (
        <section id={props.section}>
            <div style={{paddingTop: '10px'}}>
                <div class="bar-title2">
                    <p class="text-title inside" style={{color: "rgb(212, 197, 168)"}}>{paragraph[props.int].title}</p>
                </div>
                <div class="bar-mid">
                    <div class="toppixel"></div>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <p class="text-paragraph2" style={{paddingTop: "20px", fontFamily: "Din", textAlign: "justify"}}>{paragraph[props.int].content}</p>
                            </div>
                        </div>
                    </div>
                    <div class="botpixel"></div>
                    <div style={{width: "100%", height: "100%", left: "50%"}}></div>
                </div>
                {props.int == 0 ? 
                    <div style={{width: '100%', height: '420px', left: '50%'}}>
                        <div className="card-to-rotate"></div>
                        <div className="card-to-rotate2"></div>
                    </div>
                    :
                    <div style={{textAlign: 'center', marginTop: '20px', marginBottom: '10px'}} data-aos="fade-right">
                        <img src={props.pic} width="350px" height="auto" style={{margin: "auto"}}/>
                    </div>
                }
            </div>
        </section>
    )
}

export default PresentationMobile