import React  from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";

function MyPostsContainer(props) {

    const {
        store
    } = props;

    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
       <MyPosts updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
       />
    );
}

export default MyPostsContainer;