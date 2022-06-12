import React from "react";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { addPostActionCreator } from "../../../redux/profile-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state?.profilePage?.posts ?? []
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newMessage) => {
            dispatch(addPostActionCreator(newMessage));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
