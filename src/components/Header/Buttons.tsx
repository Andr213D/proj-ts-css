import React from "react";
import './Header.css';

import icon from "../../assets/img/icon.png";

export const Buttons: React.FC = () => {
    return (
        <div className=" loginWindow ">
            <tr>
                <td>
                    <button className = " buttonLeft " >
                        <a>
                            Login
                        </a>
                    </button>
                </td>
                <td >
                    <button className = " buttonRight "/>
                </td>
            </tr>
        </div>
    )
}