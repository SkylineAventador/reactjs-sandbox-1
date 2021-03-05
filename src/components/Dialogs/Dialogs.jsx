import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}><NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink></div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dmitriy' id='1'/>
                <DialogItem name='Masha' id='2'/>
                <DialogItem name='Inna' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Dasha' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message = 'Sample message text'/>
                <Message message = 'Thumbnail'/>
            </div>
        </div>
    );
}

export default Dialogs;
