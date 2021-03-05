import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        {id: 1, postText: 'Hello, this is my first post!', likesCount: 15},
        {id: 2, postText: 'Great, this is my second post!', likesCount: 7}
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post id={postsData[0].id} message={postsData[0].postText} likesCount={postsData[0].likesCount}/>
                <Post id={postsData[1].id} message={postsData[1].postText} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
