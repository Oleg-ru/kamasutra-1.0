import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {

    const {
        postData,
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={postData}/>
        </div>
    );
}

export default Profile;