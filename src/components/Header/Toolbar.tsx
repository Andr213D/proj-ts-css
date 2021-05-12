import React from "react";
import './Header.css';
import { LogIn } from "./LogIn";
import { LogOut } from "./LogOut";

export const Toolbar: React.FC = () => {
    return (
        <div className=" Toolbar ">
            <LogIn/>
            {/*<LogOut/>*/}
            <button className = " buttonRight "/>
        </div>
    )
}