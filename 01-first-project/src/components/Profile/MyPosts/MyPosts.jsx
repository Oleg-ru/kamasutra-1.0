import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

function MyPosts() {
    return (
        <div className={styles.posts}>
            <div>
                <h3 className={styles.head}>My posts</h3>
                <div>
                    <div>
                        <textarea className={styles.textarea}></textarea>
                    </div>
                    <button>Add post</button>
                </div>
            </div>
            <Post message='Вацап бро 🙌' likeCount='15'/>
            <Post message='Я изучаю React, а ты?' likeCount='20'/>
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default MyPosts;