import React from "react";
import Advertising from "./Advertising";
import Topics from "./Topics";
import './Left.css';

const Left = () => {
    return (
        <div className="left_block">
            <Topics />
            <Advertising />
        </div>
    );
}

export default Left;