import React from "react";
import './Header.css';

export const LogOut: React.FC = () => {
    return (
        <div className = " logOut ">
            <div className = " UserName ">
                <p >
                    Hello:
                </p>
                <p>
                    Nobody
                </p>
            </div>
            <div className = " buttonLogOutPosition ">
                <button className = " buttonLogOut " >
                    <p>
                        Logout
                    </p>
                </button>
            </div>
        </div>
    )
}