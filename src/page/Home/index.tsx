import React from "react";

import './Home.css';

import undeadStripteaser from "../../assets/img/undeadStripteaser.png";

import { CheckIn } from "../../components/CheckIn";
import { YouTube } from "../../components/YouTube";
import { Gamestuff } from "../../components/Gamestuff";
import { Characteristics } from "../../components/CharacteristicsSet";

export const Home: React.FC = () => {
    return (
        <div className="Home">
            <CheckIn/>
            {/*<Characteristics/>*/}
            <div className="avatar">
                <img width="110"
                     height="220"
                     src= { undeadStripteaser }
                     alt="undeadStripteaser"
                />
                <p> Если вы это видите значит я все еще не запилил аватар </p>
            </div>
            <YouTube/>
            <Gamestuff/>
        </div>
    )
}