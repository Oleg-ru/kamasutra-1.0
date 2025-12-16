import React from 'react';
import styles from './Profile.module.css';

function Profile() {
    return (
        <div className={styles.content}>
            <div>
                <img src="https://assets.monica.im/tools-web/_next/static/media/mobile_upscale.e93d7497.webp"
                     alt=""/>
            </div>
            <div>
                {/*<img src="https://web-tool.org/create-round-image/rectangular-image.jpg" alt=""/>*/}
                ava + desc
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
            </div>
            <div className={styles.posts}>
                <div className={styles.item}>
                    post1
                </div>
                <div className={styles.item}>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;