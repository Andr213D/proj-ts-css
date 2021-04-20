import React from "react";
import './Header.css';
import { Buttons } from "./Buttons";

export const Header: React.FC = () => {
    return (
        <div className="Header">
            <tr>
                <td>
                    <a className=" paddingLeft-20 paddingTop-10 " >
                        Workership plays
                    </a>
                </td>
                <Buttons/>
            </tr>
            <hr className=" border-1 margin-10 "/>
        </div>
    )
}