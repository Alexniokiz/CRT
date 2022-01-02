import React from 'react'

import './Header.scss'
import './Presentation.css'

const paragraph = [
    {
        title: "TRILLIONAIRE THUGS",
        content: "The Trillionaire Thugs’ collection brings the hip hop and urban scene to the NFT market. This universe is not very well represented even though it is an important part of the hype and is in line with the times. Many hip hop characters embody success and achievement nowadays. Our characters are thugs who evolve in a hype universe and who have been digitized by talented artists to give them life in the Metaverse. By joining the community, you may be making the best investment of your life. Be part of this new financial era where being cool and rich is more compatible than ever!",
    },
    {
        title: "BE PART OF THE GANG!",
        content: "Your NFT is both an investment and a key that can open the doors to a premium community, which is called Trillionaire Thugs’ Gang and that will give you access to many exciting rewards and awesome events! Owning a Trillionaire Thug NFT means that, more than just owning a piece of art, you are part of a gang which grants you access to various benefits that will grow over time such as Merch and a free NFT collection drop. The first two big events will come up in February 2022, following the launch of the collection,in Miami & Dubai. Everyone among the holders will have a chance to get tickets.",
    },
    {
        title: "RARE & UNIQUES",
        content: "Have you ever seen a gang without a boss? In any gang, you get respect and the benefits that go with it, by climbing the ladder. On mint day, you have a direct chance to become a Gold member without having to start from the bottom. On mint day, you will have 5% chance to mint a Golden Thug, as 390 pieces are randomly Golden! Their owners will receive additional benefits when the NFTs are connected to the Metaverse. Just by holding you will get a reward from the crew! In addition to that, 10 Legendary NFTs that will make reference to the crypto world will complete the collection.",
    },
    {
        title: "GAME & METAVERSE",
        content: "Our goal is to connect the NFTs characters to the Metaverse by adding value to your NFT, both financially and practically. As a digital identity, your NFT will simply and effectively represent you in the Metaverse, that will soon become our daily reality. When this will be available, our holders will be able to transfer the features of their NFTs to this online world and embody their character, with all its specifications. A free new drop collection will allow long term holders to access a collection of weapons that can be merged with the first collection, as an upgrade. This process will increase the value of your current NFT and add some functionality for the next stage of the project.",
    }
]

const PresentationMobile = (props) => {
    // useEffect(() => {
    //     AOS.init({ duration: 1000, once: false });
    // }, [])
    return (
        <div style={{paddingTop: '30px'}}>
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
                <div style={{width: '100%', height: '370px', left: '50%'}}>
                    <div className="card-to-rotate"></div>
                    <div className="card-to-rotate2"></div>
                </div>
                :
                <div style={{textAlign: 'center', marginTop: '10px', marginBottom: '10px'}}>
                    <img src={props.pic} width="350px" height="auto" style={{margin: "auto"}}/>
                </div>
            }
        </div>
    )
}

export default PresentationMobile