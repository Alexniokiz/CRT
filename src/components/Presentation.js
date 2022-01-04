import React from 'react'

import './Header.scss'
import './Presentation.css'
import DiscordButton from "../assets/discordbutton.png";
import Samourai from "../assets/samurainew.webp";
import "aos/dist/aos.css";

const paragraph = [
    {
        title: <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0'}}>TRILLIONAIRE THUGS</p>,
        content: <p className="text-paragraph2" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din'}}>The Trillionaire Thugs’ collection <b style={{color: "#f7c02e"}}>brings the hip hop and urban scene to the NFT market</b>. This universe is not very well represented even though it is an important part of the hype and is in line with the times. Many hip hop characters embody <b style={{color: "#f7c02e"}}>success and achievement</b> nowadays. Our characters are thugs who evolve in a hype universe and who have been digitized by talented artists to give them life in the Metaverse. By joining the community, you may be making the best investment of your life. Be part of this new financial era where being cool and rich is more compatible than ever!</p>,
    },
    {
        title: <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0'}}>BE PART OF THE GANG!</p>,
        content: <p className="text-paragraph2" style={{maxWidth: '500px', paddingTop: '20px', fontFamily: 'Din'}}>Your NFT is both an <b style={{color: "#f7c02e"}}>investment</b> and a key that can open the doors to a <b style={{color: "#f7c02e"}}>premium community</b>, which is called <b style={{color: "#f7c02e"}}>Trillionaire Thugs’ Gang</b> and that will give you access to many <b style={{color: "#f7c02e"}}>exciting rewards and awesome events</b>! Owning a Trillionaire Thug NFT means that, more than just owning a piece of art, you are <b style={{color: "#f7c02e"}}>part of a gang</b> which grants you access to various benefits that will grow over time such as Merch and a free NFT collection drop. The first two big events will come up in February 2022, following the launch of the collection,in Miami & Dubai. Everyone among the holders will have a chance to get tickets.</p>,
    },
    {
        title: <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0'}}>RARE & UNIQUES</p>,
        content: <p className="text-paragraph2" style={{paddingTop: '20px', fontFamily: 'Din'}}>Have you ever seen a gang without a boss? In any gang, you get respect and the benefits that go with it, by climbing the ladder. On mint day, you have a direct chance to <b style={{color: "#f7c02e"}}>become a Gold member without having to start from the bottom</b>. On mint day, you will have 5% chance to mint a Golden Thug, as <b style={{color: "#f7c02e"}}>390 pieces are randomly Golden!</b> Their owners will receive additional benefits when the NFTs are connected to the Metaverse. <b style={{color: "#f7c02e"}}>Just by holding you will get a reward from the crew!</b> In addition to that, 10 Legendary NFTs that will make reference to the crypto world will complete the collection.</p>,
    },
    {
        title: <p className='text-paragraph2' style={{color: '#626161', fontFamily: 'Brandon', fontSize: '22px', margin: '0'}}>GAME & METAVERSE</p>,
        content: <p className="text-paragraph2" style={{paddingTop: '20px', fontFamily: 'Din'}}>Our goal is to connect the NFTs characters to the Metaverse by <b style={{color: "#f7c02e"}}>adding value to your NFT, both financially and practically</b>. As a digital identity, your NFT will simply and effectively represent you in the Metaverse, that will soon become our daily reality. When this will be available, our holders will be able to <b style={{color: "#f7c02e"}}>transfer the features of their NFTs to this online world</b> and embody their character, with all its specifications. A <b style={{color: "#f7c02e"}}>free new drop collection</b> will allow long term holders to access a <b style={{color: "#f7c02e"}}>collection of weapons</b> that can be <b style={{color: "#f7c02e"}}>merged with the first collection</b>, as an upgrade. This process will increase the value of your current NFT and add some functionality for the next stage of the project.</p>,
    },
]
const Presentation = (props) => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000, once: false });
    // }, [])
    return (
        
        <div data-aos="fade-up" data-aos-offset="150">
            { props.int == 0 ? 
            <>
                <div className="bar-mid-top"></div>
                <div className="bar-title2">
                    <p className="text-title inside" style={{color: '#d4c5a8'}}>THE PROJECT</p>
                </div>
                <div className="bar-mid" style={{height: '620px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', maxWidth: '1150px'}}>
                        <div className="decimal-text inside"></div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            {paragraph[props.int].title}
                            <div style={{display: 'inline-flex'}}>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    {paragraph[props.int].content}
                                    <a style={{width: "100%"}} className="text-paragraph2" href="https://discord.gg/dRXdesRN63" target="_blank" rel="noreferrer">
                                        <img src={DiscordButton} alt="Discord"/>
                                    </a>
                                </div>
                                <div className="card-to-rotate"></div>
                                <div className="card-to-rotate2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            : props.int == 1 ?
                <>
                    <div className="bar-mid-top"></div>
                    <div className="bar-title2">
                        <p className="text-title inside" style={{color: '#d4c5a8'}}>THE PROJECT</p>
                    </div>
                    <div className="bar-mid" style={{height: '620px'}}>
                        <div style={{display: 'flex', flexDirection: 'row-reverse', maxWidth: '1150px', margin: 'auto', justifyContent: "space-between"}}>
                            <div className="decimal-text "></div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                {paragraph[props.int].title}
                                <div style={{display: 'inline-flex'}}>
                                    {paragraph[props.int].content}
                                </div>
                            </div>
                            <img src={Samourai} width="45%"/>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="bar-mid-top"></div>
                    <div className="bar-title2">
                        <p className="text-title inside" style={{color: '#d4c5a8'}}>THE PROJECT</p>
                    </div>
                    <div className="bar-mid" style={{height: '620px'}}>
                        <div style={{display: 'flex', flexDirection: 'row', maxWidth: '1150px', margin: 'auto'}}>
                            <div className="decimal-text "></div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                {paragraph[props.int].title}
                                {paragraph[props.int].content}
                                {paragraph[props.int+1].title}
                                {paragraph[props.int+1].content}
                            </div>
                            {/* <img src={Samourai}/> */}
                        </div>
                    </div>
                </>
            }
            <div className="bar-bottom"></div>
        </div>
    )
}

export default Presentation
