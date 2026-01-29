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
        dispatch,
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}
                     dispatch={dispatch}
                     newPostText={newPostText}
            />
        </div>
    );
}

export default Profile;