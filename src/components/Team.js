import React, { useEffect } from 'react'
import "./Header.scss"

import ProfilePic from "../assets/icon_team_1.webp"
import ProfilePic2 from "../assets/icon_team_2.webp"
import ProfilePic3 from "../assets/icon_team_3.webp"
import ProfilePic4 from "../assets/icon_team_4.webp"
import ProfilePic5 from "../assets/icon_team_5.webp"
import ProfilePic6 from "../assets/icon_team_6.webp"


import AOS from 'aos';
import "aos/dist/aos.css";

const Team = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <section id="team">
        {window.innerWidth > 900 ? 
            <div data-aos="fade-up" data-aos-offset="200">
                <div className="bar-mid-top"></div>
                <div className="bar-title2">
                        <p className="text-title inside" style={{color: '#d4c5a8'}}>THE TEAM</p>
                    </div>
                <div className="bar-mid">
                    <div style={{display: "flex"}}>
                        <div className="decimal-text inside"></div>
                        <div>
                            <p className="text-paragraph2" style={{
                                paddingLeft: "40px",
                                fontFamily: 'Din'
                            }}>A project is only as extraordinary as its people, that’s why we <b style={{color: "#f7c02e"}}>teamed up the best people in their field</b> to create Trillionaire Thugs. Our team is made of <b style={{color: "#f7c02e"}}>experts in the field of NFTs and video game development</b>, with individuals that have been connected to social media since their creation.
                                On top of that, the artists’ team are specialized in <b style={{color: "#f7c02e"}}>CGI & render animations</b> for luxury companies.
                                Mix everything and you will get the best potential for long term success as a NFTs collection!
                                <br />
                                <br />
                                Here is a brief presentation of our key people:
                            </p>
                            <div style={{display: "flex", height: 'fit-content', flexWrap: 'wrap', paddingLeft: "40px", marginTop: "30px"}}>
                                <Profile name="MARC L." status="PRODUCER" profilePic={ProfilePic}/>
                                <Profile name="SAM R." status="MARKETING" profilePic={ProfilePic2}/>
                                <Profile name="HAU N." status="ART DIRECTOR" profilePic={ProfilePic3}/>
                                <Profile name="EMMANUEL J." status="3D ARTIST" profilePic={ProfilePic4}/>
                                <Profile name="IEGOR A." status="BLOCKCHAIN EXPERT" profilePic={ProfilePic5}/>
                                <Profile name="ALEX A." status="DEVELOPER" profilePic={ProfilePic6}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar-bottom"></div>
            </div>
        : 
            <>
                <div className="bar-title2">
                    <p className="text-title inside" style={{color: '#d4c5a8'}}>THE TEAM</p>
                </div>
                <p className="text-paragraph2" style={{
                    paddingLeft: "40px",
                    fontFamily: 'Din'
                }}>A project is only as extraordinary as its people, that’s why we <b style={{color: "#f7c02e", fontFamily: "Din"}}>teamed up the best people in their field</b> to create Trillionaire Thugs. Our team is made of <b style={{color: "#f7c02e", fontFamily: "Din"}}>experts in the field of NFTs</b> and <b style={{color: "#f7c02e", fontFamily: "Din"}}>video game development</b>, with individuals that have been connected to social media since their creation.
                    On top of that, the artists’ team are specialized in <b style={{color: "#f7c02e", fontFamily: "Din"}}>CGI & render animations</b> for luxury companies.
                    Mix everything and you will get the best potential for long term success as a NFTs collection!
                    <br />
                    <br />
                    Here is a brief presentation of our key people:
                </p>
                <div class="col-12 team--wrapper pt-3 pt-lg-2" style={{padding: '10px 20px', margin: "auto"}}>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="MARC L." status="PRODUCER" profilePic={ProfilePic}/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="SAM R." status="MARKETING" profilePic={ProfilePic2}/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="HAU N." status="ART DIRECTOR" profilePic={ProfilePic3}/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="EMMANUEL J." status="3D ARTIST" profilePic={ProfilePic4}/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="IEGOR A." status="BLOCKCHAIN EXPERT" profilePic={ProfilePic5}/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="ALEX A." status="DEVELOPER" profilePic={ProfilePic6}/>
                    </div>
                </div>
            </>}
        </section>
    )
}

const Profile = (props) => {

    return (
        <div style={window.innerWidth > 992 ? {margin: "auto 40px 15px 0"} : {}}>
            <img src={props.profilePic} alt="team" width={window.innerWidth < 900 ? "160px" : "100%"}/>
            <p className="profile-name">{props.name}</p>
            <p className="profile-status">{props.status}</p>
        </div>
    )
}

export default Team
