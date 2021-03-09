import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post id={p.id} message={p.postText} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let message = newPostElement.current.value;
        props.addPost(message);
        props.updateNewPost('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
