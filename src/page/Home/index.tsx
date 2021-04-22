import React from "react";
import './Home.css';
import { CheckIn } from "../../components/CheckIn";
import undeadStripteaser from "../../assets/img/undeadStripteaser.png";
import { YouTube } from "../../components/YouTube";
import { Gamestuff } from "../../components/Gamestuff";

export const Home: React.FC = () => {
    return (
        <div className="Home">
            <CheckIn/>
            <div className="avatar">
                <img width="110"
                     height="220"
                     src= { undeadStripteaser }
                />
                <p> Если вы это видите значит я все еще не запилил аватар </p>
            </div>
            <YouTube/>
            <Gamestuff/>
        </div>
    )
}