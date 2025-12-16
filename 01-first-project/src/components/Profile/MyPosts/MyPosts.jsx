import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

function MyPosts() {
    return (
        <div className={styles.posts}>
            <div>
                My posts
                <div>
                    <textarea cols="30" rows="10"></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default MyPosts;