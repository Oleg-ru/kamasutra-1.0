import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

function MyPosts(props) {

    const {
        posts,
    } = props;

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
            {posts.map(({id, message, likeCount}) => <Post key={id} message={message} likeCount={likeCount} />)}
        </div>
    );
}

export default MyPosts;