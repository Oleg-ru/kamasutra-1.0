import React from 'react';
import styles from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <>
            <div>
                <img className={styles.profileImg} src="https://assets.monica.im/tools-web/_next/static/media/mobile_upscale.e93d7497.webp"
                     alt=""/>
            </div>
            <div className={styles.description}>
                {/*<img src="https://web-tool.org/create-round-image/rectangular-image.jpg" alt=""/>*/}
                ava + desc
            </div>
        </>
    );
}

export default ProfileInfo;