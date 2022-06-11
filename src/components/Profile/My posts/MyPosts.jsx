import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
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
                    <textarea onChange={onPostChange}
                              placeholder='Enter your message'
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}> Add Post </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)
}

export default MyPosts;