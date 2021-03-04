import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img
                src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'/>
            Post 1
            <span>Like</span>
            <span>Dislike</span>
        </div>
    );
}

export default Post;
