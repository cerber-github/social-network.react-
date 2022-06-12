import React, { useState } from "react";
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {
    let postsElement = props.posts?.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount}/>);

    const [postText, setPostText] = useState('');

    let onAddPost = () => {
        props.addPost(postText);
        setPostText('');
    }

    let onPostChange = (e) => {
        let newPostText = e.target.value;
        setPostText(newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3> Post </h3>
            <div>
                <div>
                    <textarea
                        value={postText}
                        onChange={onPostChange}
                        placeholder='Enter your message'
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>
                        Add Post
                    </button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>)
}

export default MyPosts;