import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
            <img src='https://bitcoin.org/img/icons/opengraph.png?1651392467'/>
                {props.message}
                <div>
                    <span> like </span> {props.likeCount}
                </div>
            </div>
        </div> )
}

export default Post;