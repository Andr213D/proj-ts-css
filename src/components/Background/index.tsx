import React from "react";
import './Background.css';

import planet from "../../assets/img/planet.png";
import nut from "../../assets/img/nut.png";
import noAtm from "../../assets/img/noAtm.png";
import rocket from "../../assets/img/rocket.png";
import languid from "../../assets/img/languid.png";

export const Background: React.FC = () => {
    return (
        <div className="Background">
            <img className="planet"
                 src= { planet }
                 alt="planet"/>
            <img className="nut"
                 src= { nut }
                 alt="nut"/>
            <img className="noAtm"
                 src= { noAtm }
                 alt="noAtm"/>
            <img className="rocket"
                 src= { rocket }
                 alt="rocket"/>
            <img className="languid"
                 src= { languid }
                 alt="languid"/>
        </div>
    )
}