import React from "react";
import p from './Help.module.css';
import { Link } from "react-router-dom";

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
    let dialogsElements = prop.dialogs.map( dial => <Dialog id={dial.id} name={dial.name}/>);
    let messagesElement = prop.messages.map( mess => <Message id={mess.id} text={mess.text} />)

    return (
        <div className={p.centre}>      
            <div className={p.helpers}>       
                {dialogsElements}
            </div>
            <div className={p.messages}>
                {messagesElement}
            </div>
        </div>        
    )
}

export default Help;