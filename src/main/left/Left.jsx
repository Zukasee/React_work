import React from "react";
import Advertising from "./Advertising";
import Topics from "./Topics";
import c from './Left.module.css';

const Left = () => {
    return (
        <div className={c.left_block}>
            <Topics />
            <Advertising />
        </div>
    );
}

export default Left;