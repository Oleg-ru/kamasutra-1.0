import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

function Profile(props) {

    const {
        state: {
            posts,

        },
        addPost,
    } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost}/>
        </div>
    );
}

export default Profile;