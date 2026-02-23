import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

function Profile(props) {
    const {
        profile,
        status,
        updateStatus,
        isOwner,
        savePhoto
    } = props;
    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
            />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;