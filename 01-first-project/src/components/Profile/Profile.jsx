import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";

function Profile() {
    return (
        <div>
            <div>
                <img src="https://assets.monica.im/tools-web/_next/static/media/mobile_upscale.e93d7497.webp"
                     alt=""/>
            </div>
            <div>
                {/*<img src="https://web-tool.org/create-round-image/rectangular-image.jpg" alt=""/>*/}
                ava + desc
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;