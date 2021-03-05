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
    let dialogsData = [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Inna'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Dasha'}
    ]

    let messagesData = [
        {id: 1, message: 'Hello, this is my first message'},
        {id: 2, message: 'Thumbnail'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
            </div>
        </div>
    );
}

export default Dialogs;
