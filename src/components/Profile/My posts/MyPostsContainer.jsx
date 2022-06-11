import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        post: state?.profilePage?.posts ?? [],
        newPostText: state?.profilePage?.newPostText ?? ''
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());

        }
    }
}

const MyPostsContainer = connect(mapDispatchToProps, mapStateToProps) (MyPosts);

export default MyPostsContainer;