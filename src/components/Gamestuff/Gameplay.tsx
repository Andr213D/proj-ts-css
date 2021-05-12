import React from "react";
import './Gameplay.css';

export const Gameplay: React.FC = () => {
    return (
        <div className={ "GamePlay" } >
            <p>Мощнить на орков</p>
            <div>
                <button >Задача</button>
                <button id={ "bot2" }>Цитата</button>
            </div>
            <output/>
            <input placeholder="Мощнить" type="text"/>
            <div>
                <button id={ "EnterVal"}>
                    ✓
                </button>
            </div>
        </div>
    )
}