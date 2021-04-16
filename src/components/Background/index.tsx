import React from "react";
import './Background.css';

import planet from "../../assets/img/planet.png";
import noAtm from "../../assets/img/noAtm.png";
import rocket from "../../assets/img/rocket.png";
import languid from "../../assets/img/languid.png";

export const Background: React.FC = () => {
    return (
        <div className="Background">
            <img className="planet"
                 src= { planet } />
            <img className="noAtm"
                 src= { noAtm }  />
            <img className="rocket"
                 src= { rocket } />
            <img className="languid"
                 src= { languid }/>
        </div>
    )
}