import React from 'react';
import styles from "./Post.module.css";

function Post(props) {

    const {
        message,
        likeCount = 0,
    } = props;

    return (
        <div className={styles.item}>
            <img src="https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg" alt="red girl"/>
            {message}
            <div className={styles.like}>
                <span className={styles.likeCount}>{likeCount}</span><span className={styles.likeHeart}>❤</span>
            </div>
        </div>
    );
}

export default Post;