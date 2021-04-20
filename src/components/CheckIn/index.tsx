import React from "react";
import './CheckIn.css';

export const CheckIn: React.FC = () => {
    return (
        <div className=" checkIn ">
            <p >World check-in counter</p>
            <div className={ "checkInNick" }>
                <a>Nickname</a>
                <input type="text"></input>
            </div>
            <div className={ "checkInPassword" } >
                <a>Password</a>
                <input type="password"></input>
            </div>
            <div className ="Race" >
                <div> 1 </div>
                <div id = "RaceDiv2" > 2 </div>
                <div id = "RaceDiv3" > 3 </div>
            </div>
            <div id="Race">
                <a> Race </a>
            </div>
            <div className = { "DOB" }>
                <a> DOB </a>
                <input type="date"></input>
            </div>
            <div className = { "News" }>
                <div/>
                <a> News </a>
            </div>
        </div>
    )
}