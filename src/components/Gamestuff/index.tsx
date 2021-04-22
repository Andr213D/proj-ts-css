import React from "react";
import './Gamestuff.css';

import sage from "../../assets/img/sage.png";
import humans from "../../assets/img/humans.png";
import gnoms from "../../assets/img/gnoms.png";
import orks from "../../assets/img/orks.png";

export const Gamestuff: React.FC = () => {
    return (
        <div className={ "Gamestuff" }>
            <div className={ "Sage" } >
                <div>
                    <p>Sage</p>
                </div>
                <p>*Вы просыпаетесь от непонятного чувства, перед вами стоит незнакомец который что то вам говорит* Эй че?! проснулся... Короче сам тут разбирайся, у меня нет времени, вот орки. Ну ты понял.</p>
                <img width="150"
                     height="121"
                     src= { sage }
                />
            </div>
            <div className={ "Action" } >
                <img width="200"
                     height="150"
                     src= { humans }
                />
                <img width="190"
                     height="150"
                     src= { gnoms }
                />
                <img id="Orks"
                     width="180"
                     height="150"
                     src= { orks }
                />
            </div>
            <div className={ "Chat" } >
                <div>
                    <p>Chat</p>
                </div>
                <p>Nobody: Hi! </p>
            </div>
            <div className={ "Online" } >
                <div>
                    <p>Online</p>
                </div>
                <p>Nobody</p>
            </div>
        </div>
    )
}