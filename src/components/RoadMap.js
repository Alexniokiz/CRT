import React, {useEffect, useState} from 'react';
import './Header.scss';
import './RoadMap.scss';

import AOS from 'aos';
import "aos/dist/aos.css";

const RoadMap = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        let position = window.pageYOffset;
        if (window.innerHeight  < 1100) {
            if (position < 3800) return setScrollPosition(0);
            if (position > 5000) return setScrollPosition(86);
            let progressHeight = ((position - 3800) / 1400) * 100;
            setScrollPosition(progressHeight);
        } else {
            if (position < 3400) return setScrollPosition(0);
            if (position > 4600) return setScrollPosition(86);
            let progressHeight = ((position - 3400) / 1400) * 100;
            setScrollPosition(progressHeight);
        }

    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 300 });
    }, [])
    console.log(scrollPosition);
    return (
        <section id="roadmap">
            {window.innerWidth < 992 ?
                <>
                    <div className="bar-title2" style={{marginTop: "15px"}}>
                        <p className="text-title inside" style={{color: '#d4c5a8'}}>ROADMAP</p>
                    </div>
                <div style={{
                    padding: "0px 40px 0px 40px"
                }}>

                    <div class="roadmap--container col-xl-10 col-12">
                        <div class="roadmap--line"></div>
                        <div class="roadmap--wrapper">
                            <div class="roadmap--item">
                                <h2 class="h2 roadmap--item-title" data-aos="fade-up">Phase 1</h2>
                                <span class="roadmap--point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                    <h4 class="phase1" data-aos="fade-up"><b class=" h5 title ">Launch of the NFT Collection</b><br/></h4>
                                    <span class="new-line" data-aos="fade-up">
                                        <li>Launch of our Discord & website</li>
                                        <li>Grant access to the limited whitelist</li>
                                        <li>Launch of the 7,777 NFTs collection at the end of January</li>
                                    </span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title" data-aos="fade-up">Phase 2</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase2" data-aos="fade-up"><b class=" h5 title ">Access to the Gang</b><br/></h4><span class="new-line" data-aos="fade-up">Each holder will now be part of a close community of successful people in the blockchain world. On top of that, to celebrate the launch of the collection, we will throw two big parties in Dubai and Miami to give a chance to all the members of this new community to meet in real life. Throughout the project, different events will take place for the holders, and rewards will be earned.</span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title " data-aos="fade-up">Phase 3</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase3" data-aos="fade-up"><b class=" h5 title ">Merchandising release</b><br/></h4><span class="new-line" data-aos="fade-up">Holders will have access to high quality merch (caps/t shirts/sweatshirts…) related to the brand Trillionaire Thugs. It will then be easy to recognize each other, between members of our private community!</span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title"  data-aos="fade-up">Phase 4</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase4" data-aos="fade-up"><b class=" h5 title ">New collection Drop</b><br/></h4><span class="new-line" data-aos="fade-up">Long-term holders (30 days or more) will have access to a free drop of a new NFTs collection of weapons that can be merged with the first collection. Newcomers to the project will also have the opportunity to acquire items from this new drop on through a new mint or OpenSea.</span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title " data-aos="fade-up">Phase 5</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase5" data-aos="fade-up"><b class=" h5 title ">Fusion of the NFT</b><br/></h4><span class="new-line" data-aos="fade-up">You will be able to upgrade your character with different items and weapons by merging them into a new NFT collection. This process will increase the value of your current NFT and add some functionality for the next stage of the project.</span>
                                </div>
                                <div class="roadmap--item" >
                                    <h2 class="h2 roadmap--item-title " data-aos="fade-up">Phase 6</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase6" data-aos="fade-up"><b class="h5 title">Taking over the Metaverse</b><br/></h4><span class="new-line" data-aos="fade-up">Our goal is to connect the NFTs characters to the Metaverse & to a Play 2 earn game. When this will be available, our holders will be able to transfer the features of their NFTs to this online world and embody their character, with all its specifications.</span>
                                </div>
                            </div>
                        </div>
                </div>
            </>
            : 
            <>
                <div className="bar-mid-top"></div>
                <div className="bar-title2">
                    <p className="text-title inside" style={{color: '#d4c5a8'}}>ROADMAP</p>
                </div>
                <div className="bar-mid">
                    <div style={{display: 'flex', flexDirection: 'row', maxWidth: '1150px'}}>
                        <div className="decimal-text inside"></div>
                        <div style={{width: '15vw'}}>
                            <p data-aos="fade-right" className="phase-count" style={{paddingTop: '65px', textAlign: "center"}}>PHASE 1</p>
                            <p data-aos="fade-right" style={{
                                width: "60%",
                                textAlign: "center",
                                margin: "auto",
                                color: "rgb(98, 97, 97)"
                            }}>LAUNCH OF THE COLLECTION</p>
                            <p data-aos="fade-right" className="phase-count" style={{paddingTop: '135px', textAlign: "center"}}>PHASE 2</p>
                            <p data-aos="fade-right" style={{
                                width: "65%",
                                textAlign: "center",
                                margin: "auto",
                                textTransform: "uppercase",
                                color: "rgb(98, 97, 97)"
                            }}>Access to the Gang</p>
                            <p data-aos="fade-right" className="phase-count" style={{paddingTop: '115px', textAlign: "center"}}>PHASE 3</p>
                            <p data-aos="fade-right" style={{
                                width: "65%",
                                textAlign: "center",
                                margin: "auto",
                                textTransform: "uppercase",
                                color: "rgb(98, 97, 97)"
                            }}>Merchandising release</p>
                            <p data-aos="fade-right" className="phase-count" style={{paddingTop: '125px', textAlign: "center"}}>PHASE 4</p>
                            <p data-aos="fade-right" style={{
                                width: "65%",
                                textAlign: "center",
                                margin: "auto",
                                textTransform: "uppercase",
                                color: "rgb(98, 97, 97)"
                            }}>New collection Drop</p>
                            <p data-aos="fade-right" className="phase-count" style={{paddingTop: '125px', textAlign: "center"}}>PHASE 5</p>
                            <p data-aos="fade-right" style={{
                                width: "65%",
                                textAlign: "center",
                                margin: "auto",
                                textTransform: "uppercase",
                                color: "rgb(98, 97, 97)"
                            }}>Fusion of the NFT</p>
                            <p data-aos="fade-right" className="phase-count" style={{paddingTop: '125px', textAlign: "center"}}>PHASE 6</p>
                            <p data-aos="fade-right" style={{
                                width: "60%",
                                textAlign: "center",
                                margin: "auto",
                                textTransform: "uppercase",
                                color: "rgb(98, 97, 97)"
                            }}>Taking over the Metaverse</p>
                        </div>
                        <div className="roadmap--container" style={{display: 'inline-flex'}}>
                            <div class="roadmap--line-empty" ></div>
                            <div class="roadmap--line" style={{height: scrollPosition + "%"}}></div>
                            <div>
                                <span class="roadmap--point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                <div data-aos="fade-left" className="carton c1">
                                <p className="contenu-description">
                                    <li>Launch of our Discord & website</li>
                                    <li>Grant access to the limited whitelist</li>
                                    <li>Launch of the 7,777 NFTs collection at the end of January</li>
                                    </p>
                                </div>
                                <span class="roadmap--point pad-point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                <div data-aos="fade-left"  className="carton c2">
                                    <p className="contenu-description">Each holder will now be part of a close community of successful people in the blockchain world. On top of that, to celebrate the launch of the collection, we will throw two big parties in Dubai and Miami to give a chance to all the members of this new community to meet in real life. Throughout the project, different events will take place for the holders, and rewards will be earned.</p>
                                </div>
                                <span class="roadmap--point pad-point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                <div data-aos="fade-left"  className="carton c3">
                                    <p className="contenu-description">Holders will have access to high quality merch (caps/t shirts/sweatshirts…) related to the brand Trillionaire Thugs. It will then be easy to recognize each other, between members of our private community!</p>
                                </div>
                                <span class="roadmap--point pad-point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                <div data-aos="fade-left"  className="carton c4">
                                    <p className="contenu-description">Long-term holders (30 days or more) will have access to a free drop of a new NFTs collection of weapons that can be merged with the first collection. Newcomers to the project will also have the opportunity to acquire items from this new drop on through a new mint or OpenSea.</p>
                                </div>
                                <span class="roadmap--point pad-point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                <div data-aos="fade-left"  className="carton c5">
                                    <p className="contenu-description">You will be able to upgrade your character with different items and weapons by merging them into a new NFT collection. This process will increase the value of your current NFT and add some functionality for the next stage of the project.</p>
                                </div>
                                <span class="roadmap--point pad-point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                <div data-aos="fade-left"  className="carton c6">
                                    <p className="contenu-description">Our goal is to connect the NFTs characters to the Metaverse & to a Play 2 earn game. When this will be available, our holders will be able to transfer the features of their NFTs to this online world and embody their character, with all its specifications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar-bottom"></div>
            </>
        }
        </section>
    )
}

export default RoadMap
