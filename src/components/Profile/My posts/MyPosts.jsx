import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div className={s.postBlock}>
            <h3> Post </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              placeholder='Enter your message'
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}> Add Post </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)
}

export default MyPosts;