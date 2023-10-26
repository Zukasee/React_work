import React, { useState } from "react";
import p from './Help.module.css';
import { Link } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";

const Dialog = (prop) => {
    let path = "/dialogs/" + prop.id;
    
    return (
        <div className={p.dialog}>
            <Link to={path}>{prop.name}</Link>
        </div>
    )
}

const Message = (prop) => {
    return (
        <div className={p.message}>
            {prop.text}
        </div>
    )
}

const Help = (prop) => {
    const [text, setText] = useState(' ');

    let dialogsElements = prop.dialogs.map( (dial) => <Dialog id={dial.id} name={dial.name}/>);
    let messagesElement = prop.messages.map( (mess) => <Message id={mess.id} text={mess.text} />);

    let addMessage = () => {    
        prop.addMessage(text);
        getValue.inputtext = ' '
    }

    return (
        <div className={p.centre}>      
            <div className={p.helpers}>       
                {dialogsElements}
            </div>
            <div className={p.messages}>
                {messagesElement}
                <input className={p.inputtext} value={text} onChange={event => setText(event.target.value)}></input>
                <button onClick={addMessage}>send</button>
            </div>
        </div>        
    )
}

export default Help;