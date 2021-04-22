import React from "react";
import './CheckIn.css';
import amorphousNobody from "../../assets/img/amorphousNobody.png";
import arrow from "../../assets/img/arrow.png";

export const CheckIn: React.FC = () => {
    return (
        <div className=" checkIn ">
            <p >World check-in counter</p>
            <div className={ "checkInNick" }>
                <a>Nickname</a>
                <input type="text"/>
            </div>
            <div className={ "checkInPassword" } >
                <a>Password</a>
                <input type="password"/>
            </div>
            <div className ="Race" >
                <div>
                    <button>
                        <img width="54"
                             height="71"
                             src= { amorphousNobody }
                        />
                    </button>
                </div>
                <div id = "RaceDiv2" >
                    <button>
                        <img width="54"
                             height="71"
                             src= { amorphousNobody }
                        />
                    </button>
                </div>
                <div id = "RaceDiv3" >
                    <button>
                        <img width="54"
                             height="71"
                             src= { amorphousNobody }
                        />
                    </button>
                </div>
            </div>
            <div id="Race">
                <a> Race </a>
            </div>
            <div className = { "DOB" }>
                <a> DOB </a>
                <input type="date"/>
            </div>
            <div className = { "News" }>
                <div>
                    <button>
                        <img width="65"
                             height="65"
                             src= { arrow }
                        />
                    </button>
                </div>
                <a> Check-in </a>
            </div>
        </div>
    )
}