import React from "react";
import './Header.css';

export const Header: React.FC = () => {
    return (
        <div className="Header">
            <a className=" paddingLeft-20px paddingTop-10px " >
                Workership plays
            </a>
            <hr className=" border-1px margin-10px "/>
        </div>
    )
}