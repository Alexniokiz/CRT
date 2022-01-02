import React, {useEffect, useState} from 'react';
import './Header.scss';
import './RoadMap.scss';

import AOS from 'aos';
import "aos/dist/aos.css";

const RoadMap = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        AOS.init({ duration: 1000, once: false, offset: 300 });
    }, [])
    return (
        <div>
            {window.innerWidth < 992 ?
                <>
                    <div className="bar-title2">
                        <p className="text-title inside" style={{color: '#d4c5a8'}}>ROADMAP</p>
                    </div>
                <div style={{
                    padding: "0px 40px 0px 40px"
                }}>

                    <div class="roadmap--container col-xl-10 col-12">
                        <div class="roadmap--line"></div>
                        <div class="roadmap--wrapper">
                            <div class="roadmap--item">
                                <h2 class="h2 roadmap--item-title">Phase 1</h2>
                                <span class="roadmap--point">
                                    <span class="roadmap--point-inside"></span>
                                </span>
                                    <h4 class="phase1"><b class=" h5 title ">Launch of the NFT Collection</b><br/></h4>
                                    <span class="new-line">
                                        <li>Launch of our Discord & website</li>
                                        <li>Grant access to the limited whitelist</li>
                                        <li>Launch of the 7,777 NFTs collection at the end of January</li>
                                    </span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title">Phase 2</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase2"><b class=" h5 title ">Access to the Gang</b><br/></h4><span class="new-line">Each holder will now be part of a close community of successful people in the blockchain world. On top of that, to celebrate the launch of the collection, we will throw two big parties in Dubai and Miami to give a chance to all the members of this new community to meet in real life. Throughout the project, different events will take place for the holders, and rewards will be earned.</span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title ">Phase 3</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase3"><b class=" h5 title ">Merchandising release</b><br/></h4><span class="new-line">Holders will have access to high quality merch (caps/t shirts/sweatshirts…) related to the brand Trillionaire Thugs. It will then be easy to recognize each other, between members of our private community!</span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title ">Phase 4</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase4"><b class=" h5 title ">New collection Drop</b><br/></h4><span class="new-line">Long-term holders (30 days or more) will have access to a free drop of a new NFTs collection of weapons that can be merged with the first collection. Newcomers to the project will also have the opportunity to acquire items from this new drop on through a new mint or OpenSea.</span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title ">Phase 5</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase5"><b class=" h5 title ">Fusion of the NFT</b><br/></h4><span class="new-line">You will be able to upgrade your character with different items and weapons by merging them into a new NFT collection. This process will increase the value of your current NFT and add some functionality for the next stage of the project.</span>
                                </div>
                                <div class="roadmap--item">
                                    <h2 class="h2 roadmap--item-title ">Phase 6</h2>
                                    <span class="roadmap--point"></span>
                                    <h4 class="phase6"><b class="h5 title">Taking over the Metaverse</b><br/></h4><span class="new-line">Our goal is to connect the NFTs characters to the Metaverse & to a Play 2 earn game. When this will be available, our holders will be able to transfer the features of their NFTs to this online world and embody their character, with all its specifications.</span>
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
                    <div>
                        <p data-aos="fade-right" className="phase-count" style={{paddingTop: '130px'}}>PHASE 1</p>
                        <p data-aos="fade-right" className="phase-count">PHASE 2</p>
                        <p data-aos="fade-right" className="phase-count">PHASE 3</p>
                        <p data-aos="fade-right" className="phase-count">PHASE 4</p>
                        <p data-aos="fade-right" className="phase-count">PHASE 5</p>
                    </div>
                    <div>
                        <div className="progress-empty"></div>
                        <div  ref={
                            el => {
                                if (!el) return;
                                if (el.getBoundingClientRect().y < 720 && el.getBoundingClientRect().y > -275) {
                                    setWidth(720 - el.getBoundingClientRect().y)
                                } else if (el.getBoundingClientRect().y > 720) {
                                    setWidth(0)
                                } else if (el.getBoundingClientRect().y < -345) {
                                    setWidth(1005)
                                }
                            }
                        } className="progress-full" style={{height: width+'px'}}></div>
                    </div>
                    <div style={{paddingTop: '25px'}}>
                        <div data-aos="fade-left" className="carton">
                            <p className="title-description">JANUARY 2022</p>
                            <p className="contenu-description">• Access to the whitelist</p>
                            <p className="contenu-description">• Join hte community on the discord</p>
                        </div>
                        <div data-aos="fade-left"  className="carton">
                            <p className="title-description">JANUARY 2022</p>
                            <p className="contenu-description">• Access to the whitelist</p>
                            <p className="contenu-description">• Join hte community on the discord</p>
                        </div>
                        <div data-aos="fade-left"  className="carton">
                            <p className="title-description">JANUARY 2022</p>
                            <p className="contenu-description">• Access to the whitelist</p>
                            <p className="contenu-description">• Join hte community on the discord</p>
                        </div>
                        <div data-aos="fade-left"  className="carton">
                            <p className="title-description">JANUARY 2022</p>
                            <p className="contenu-description">• Access to the whitelist</p>
                            <p className="contenu-description">• Join hte community on the discord</p>
                        </div>
                        <div data-aos="fade-left"  className="carton">
                            <p className="title-description">JANUARY 2022</p>
                            <p className="contenu-description">• Access to the whitelist</p>
                            <p className="contenu-description">• Join hte community on the discord</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bar-bottom"></div>
            </>
        }
        </div>
    )
}

export default RoadMap
