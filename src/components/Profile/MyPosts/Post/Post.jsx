import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'/>
            {props.message}
            <span>Like [{props.likesCount}]</span>
            <span>Dislike</span>
        </div>
    );
}

export default Post;
