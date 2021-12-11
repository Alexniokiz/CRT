import React from 'react'
import "./Header.css"

import ProfilePic from "../assets/icon_team_1.png"

const Team = () => {
    return (
        <div>
            <div className="bar-mid-top"></div>
            <div className="bar-title2">
                    <p className="text-title inside" style={{color: 'white'}}>THE TEAM</p>
                </div>
            <div className="bar-mid" style={{height: '800px'}}>
                <div style={{display: "flex"}}>
                    <div className="decimal-text inside"></div>
                    <div style={{display: "flex", height: 'fit-content', flexWrap: 'wrap'}}>
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                        <Profile name="MARC LEJEUNE" status="CO-FOUNDER"/>
                    </div>
                </div>
            </div>
            <div className="bar-bottom"></div>
        </div>
    )
}

const Profile = (props) => {
    return (
        <div style={{padding: '30px 40px'}}>
            <img src={ProfilePic}/>
            <p className="profile-name">{props.name}</p>
            <p className="profile-status">{props.status}</p>
        </div>
    )
}

export default Team
