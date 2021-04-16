import React from 'react';
import './css/App.css';
import { Header } from './components/Header/'
import { Background } from "./components/Background";
import { Home } from "./page/Home";

function App() {
    return (
        <div className ='App'>
            <Header/>
            <Home/>
            <Background/>
        </div>
    );
}

export default App;
