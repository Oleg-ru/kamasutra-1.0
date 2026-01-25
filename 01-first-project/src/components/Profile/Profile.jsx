import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {

    const {
        state: {
            posts,
        }
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;