import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}><NavLink to='/dialogs/1'>User 1</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/2'>User 2</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/3'>User 3</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/4'>User 4</NavLink></div>
                <div className={s.dialog}><NavLink to='/dialogs/5'>User 5</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Message 1</div>
                <div className={s.dialog}>Message 2</div>
                <div className={s.dialog}>Message 3</div>
            </div>
        </div>
    );
}

export default Dialogs;
