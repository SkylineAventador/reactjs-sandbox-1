import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Inna'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Dasha'}
    ]

    let messages = [
        {id: 1, message: 'Hello, this is my first message'},
        {id: 2, message: 'Thumbnail'}
    ]

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;
