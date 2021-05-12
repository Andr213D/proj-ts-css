import React from "react";
import './Header.css';
import { Toolbar } from "./Toolbar";

export const Header: React.FC = () => {
    return (
        <div className = " Header ">
            <div className = " HeaderTools " >
                <p className= " paddingLeft-20 paddingTop-10 " id="HeaderName">
                    Workership plays
                </p>
                <Toolbar/>
            </div>
            <hr className=" border-1 margin-10 "/>
        </div>
    )
}