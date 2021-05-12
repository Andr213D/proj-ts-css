import React from "react";
import './Header.css';

export const LogIn: React.FC = () => {
    return (
        <div className = " logIn ">
            <input placeholder="Логин" type="text"/>
            <input placeholder="Пароль" type="password"/>
            <div >
                <button className = " buttonLogIn " >
                    <p>
                        Login
                    </p>
                </button>
            </div>
        </div>
    )
}