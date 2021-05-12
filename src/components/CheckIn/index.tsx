import React from "react";

import './CheckIn.css';

import amorphousNobody from "../../assets/img/amorphousNobody.png";
import arrow from "../../assets/img/arrow.png";
import { Input } from "./Input";

//// @ts-ignore

export const CheckIn: React.FC = () => {

    const [inputLogin, setInputLogin] = React.useState<string>('');
    const changeLogin = ( login: React.ChangeEvent<HTMLInputElement> ) => {
        setInputLogin( login.currentTarget.value ) }

    const [inputPassword, setInputPassword] = React.useState<string>('');
    const changePassword = ( password: React.ChangeEvent<HTMLInputElement> ) => {
        setInputPassword( password.currentTarget.value ) }

    const [inputDate, setInputDate] = React.useState<string>('');
    const changeDate = ( date: React.ChangeEvent<HTMLInputElement> ) => {
        setInputDate( date.currentTarget.value ) }

    const [inputRace, choiceRace] = React.useState<string>('0');

    const registrationSet = {
        id:         "0",
        login:      inputLogin,
        password:   inputPassword,
        race:       inputRace,
        date:       inputDate,
    }

    console.log(registrationSet)

    return (
        <div className=" checkIn ">
            <p id="header">World check-in counter </p>
            <div className={ "checkInNick" }>
                <p>Nickname</p>
                {/*<Input*/}
                {/*    inputValue       = { "111" }*/}
                {/*    inputPlaceholder = "Логин"*/}
                {/*    inputType        = "text"*/}
                {/*    inputMinLength   = { 4 }*/}
                {/*    inputMaxLength   = { 12 }*/}
                {/*/>*/}
                <input
                    onChange = { changeLogin }
                    value={ inputLogin }
                    placeholder="Логин"
                    type="text"
                    minLength ={4}
                    maxLength ={12}
                />
            </div>
            <div className={ "checkInPassword" } >
                <p>Password</p>
                <input
                    onChange = { changePassword }
                    value={ inputPassword }
                    placeholder="Пароль"
                    type="password"
                    minLength ={4}
                    maxLength ={16}
                />
            </div>
            <div className ="Race" >
                <div>
                    <button onClick =
                                {( onClickRace ) => {
                                    choiceRace("1")
                                }}
                    >
                        <img width="54"
                             height="71"
                             src= { amorphousNobody }
                             alt="amorphousNobody"
                        />
                    </button>
                </div>
                <div id = "RaceDiv2" >
                    <button onClick =
                                {( onClickRace ) => {
                                    choiceRace("2")
                                }}
                    >
                        <img width="54"
                             height="71"
                             src= { amorphousNobody }
                             alt="amorphousNobody"
                        />
                    </button>
                </div>
                <div id = "RaceDiv3" >
                    <button onClick =
                                {( onClickRace ) => {
                                    choiceRace("3")
                                }}
                    >
                        <img width="54"
                             height="71"
                             src= { amorphousNobody }
                             alt="amorphousNobody"
                        />
                    </button>
                </div>
            </div>
            <div id="Race">
                <p> Race </p>
            </div>
            <div className = { "DOB" }>
                <p> DOB </p>
                <input
                    onChange = { changeDate }
                    value={ inputDate }
                    type="date"/>
            </div>
            <div className = { "News" }>
                <div>
                    <button
                        onClick =
                            {(React) => {
                            console.log("Hi boy")
                        }}
                    >
                        <img width="65"
                             height="65"
                             src= { arrow }
                             alt="arrow"
                        />
                    </button>
                </div>
                <p> Check-in </p>
            </div>
        </div>
    )
}