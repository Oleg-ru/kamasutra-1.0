import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {

    const {
        state: {
            posts,
            newPostText,
        },
        addPost,
        updateNewPostText,
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}
                     addPost={addPost}
                     newPostText={newPostText}
                     updateNewPostText={updateNewPostText}
            />
        </div>
    );
}

export default Profile;