import React from "react";

import './Characteristics.css';

import amorphousNobody from "../../assets/img/amorphousNobody.png";
import arrow from "../../assets/img/arrow.png";

export const Characteristics: React.FC = () => {
    return (
        <div className=" Characteristics ">
            <div className="TitleHead padding-10" >
                <p> Characteristics set </p>
            </div>
            <div className={ " FirstBlock " }>
                <tr className={ "Nickname " }>
                    <td>
                        <p> Nickname: </p>
                    </td>
                    <td id="setP">
                        <p> Nobody </p>
                    </td>
                </tr>
                <tr className={ " Karma " }>
                    <td>
                        <p> Karma: </p>
                    </td>
                    <td id="setP">
                        <p> value </p>
                    </td>
                </tr>
                <div className ="RaceSet" >
                    <p> Race: </p>
                    <p id={ "RaceSet" }> Amorphous Nobady </p>
                    <div>
                        <img width="69"
                             height="79"
                             src= { amorphousNobody }
                             alt="amorphousNobody"
                        />
                    </div>
                </div>
                <tr className={ " Lvl " }>
                    <td>
                        <p> Level: </p>
                    </td>
                    <td id="setP">
                        <p> Number </p>
                    </td>
                </tr>
            </div>
            <div className={ "SecondBlock" }>
                <tr className={ "  " }>
                    <td>
                        <p> Heals: </p>
                    </td>
                    <td id="setP">
                        <p> 20/20 </p>
                    </td>
                </tr>
                <tr className={ "paddingTop-20" } >
                    <td>
                        <p> Strength: </p>
                    </td>
                    <td id="setP">
                        <p> 0 </p>
                    </td>
                </tr>
                <tr className={ "paddingTop-20" } >
                    <td>
                        <p> Agility: </p>
                    </td>
                    <td id="setP">
                        <p> 0 </p>
                    </td>
                </tr>
                <tr className={ "paddingTop-20" } >
                    <td>
                        <p> Intellect: </p>
                    </td>
                    <td id="setP">
                        <p> 0 </p>
                    </td>
                </tr>
                <tr className={ "paddingTop-20" } >
                    <td>
                        <p> Experience: </p>
                    </td>
                    <td id="setP">
                        <p> 0/100 </p>
                    </td>
                </tr>
            </div>
            <div className = { "News" }>
                <div>
                    <button>
                        <img width="65"
                             height="65"
                             src= { arrow }
                             alt="arrow"
                        />
                    </button>
                </div>
                <p> News </p>
            </div>
        </div>
    )
}