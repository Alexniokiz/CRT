import React, { useEffect } from 'react'
import "./Header.scss"

import ProfilePic from "../assets/icon_team_1.png"
import AOS from 'aos';
import "aos/dist/aos.css";

const Team = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <>
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
                        }}>A project is only as extraordinary as its people, that’s why we teamed up the best people in their field to create Trillionaire Thugs. Our team is made of experts in the field of NFTs and video game development, with individuals that have been connected to social media since their creation.
                            On top of that, the artists’ team are specialized in CGI & render animations for luxury companies.
                            Mix everything and you will get the best potential for long term success as a NFTs collection!
                            <br />
                            <br />
                            Here is a brief presentation of our key people:
                        </p>
                        <div style={{display: "flex", height: 'fit-content', flexWrap: 'wrap'}}>
                            <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                            <Profile name="ALEXANDRE ARNAUD" status="CO-FOUNDER"/>
                            <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                            <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                            <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                            <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
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
                }}>A project is only as extraordinary as its people, that’s why we teamed up the best people in their field to create Trillionaire Thugs. Our team is made of experts in the field of NFTs and video game development, with individuals that have been connected to social media since their creation.
                    On top of that, the artists’ team are specialized in CGI & render animations for luxury companies.
                    Mix everything and you will get the best potential for long term success as a NFTs collection!
                    <br />
                    <br />
                    Here is a brief presentation of our key people:
                </p>
                <div class="col-12 team--wrapper pt-3 pt-lg-2" style={{padding: '10px', margin: "auto"}}>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                    </div>
                    <div class="team--item col-lg-3 col-6">
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                    </div>
                </div>
            </>}
        </>
    )
}

const Profile = (props) => {

    return (
        <div>
            <img src={ProfilePic} alt="team" width={window.innerWidth < 900 ? "160px" : "100%"}/>
            <p className="profile-name">{props.name}</p>
            <p className="profile-status">{props.status}</p>
        </div>
    )
}

export default Team
