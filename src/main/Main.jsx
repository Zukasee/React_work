import React from "react";
import Left from "./left/Left";
import Right from "./right/Right";
import './Main.css';

const Main = () => {
    return (
        <div className="centre">
            <Left />
            <Right />
        </div>
    );
}

export default Main;