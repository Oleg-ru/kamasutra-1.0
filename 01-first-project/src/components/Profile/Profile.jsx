import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

function Profile(props) {

    const {
        profile,
        status,
        updateStatus
    } = props;

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;