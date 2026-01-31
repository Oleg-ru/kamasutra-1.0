import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

function Profile(props) {

    const {
        store
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={store} />
        </div>
    );
}

export default Profile;