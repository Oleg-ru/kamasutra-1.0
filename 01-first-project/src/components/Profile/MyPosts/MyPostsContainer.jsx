import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (text) => {debugger; dispatch(updateNewPostTextActionCreator(text))}
    }
};

const MyPostsContainer
    = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;