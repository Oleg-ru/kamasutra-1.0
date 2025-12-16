import React from 'react';
import styles from "./Post.module.css";

function Post() {
    return (
        <div className={styles.item}>
            <img src="https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg" alt="red girl"/>
            post1
            <div>
                <span className={styles.like}>❤</span>
            </div>
        </div>
    );
}

export default Post;