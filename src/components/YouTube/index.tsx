import React from "react";
import './YouTube.css';

export const YouTube: React.FC = () => {
    return (
        <div className="videoBlog">
            <div >
                <iframe width="140" height="100" src="https://www.youtube.com/embed/OYBorJBxiew"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div id = "videoMartelDiv2">
                <iframe width="140" height="100" src="https://www.youtube.com/embed/S6RO8aNWCm0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div id = "videoMartelDiv3">
                <iframe width="140" height="100" src="https://www.youtube.com/embed/QO6L50wNptY"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div id = "videoMartelDiv4">
                <iframe width="140" height="100" src="https://www.youtube.com/embed/6qwMw2djCDw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
            <div id = "videoMartelDiv5">
                <iframe width="140" height="100" src="https://www.youtube.com/embed/DHjLhaB3bGs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        </div>
    )
}