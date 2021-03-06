import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png'/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
