import React from "react";
import './Home.css';
import { CheckIn } from "../../components/CheckIn";

export const Home: React.FC = () => {
    return (
        <div className="Home">
            <CheckIn/>
            <div className="avatar">
                <p> Avatar </p>
            </div>
            <div className="videoBlog">
                video
            </div>
        </div>
    )
}