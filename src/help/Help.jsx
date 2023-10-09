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

let dialogsData = [
        {id: 1, name: 'Kirill admin'},
        {id: 2, name: 'Vika seller'}
    ]

let dialogsElements = dialogsData.map( dial => <Dialog id={dial.id} name={dial.name}/>);

const Message = (prop) => {
    return (
        <div className="p.message">
            {prop.message}
        </div>
    )
}

const Help = () => {

    return (
        <div className={p.centre}>      
            <div className={p.helpers}>       
                {dialogsElements}
            </div>
            <div className={p.messages}>
                <Message message="hi"/>
                <Message message="How are you?"/>
                <Message message="bb"/>
            </div>
        </div>        
    )
}

export default Help;