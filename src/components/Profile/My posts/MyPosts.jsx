import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postBlock}>
            <h3> Post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}> Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)
}

export default MyPosts;