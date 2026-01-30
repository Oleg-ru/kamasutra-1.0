import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state.js";





function MyPosts(props) {

    const {
        posts,
        dispatch,
        newPostText,
    } = props;

    const newPostElement = useRef(null);

    const addPost = () => {
        dispatch(addPostActionCreator());
    }

    const onPostChange = (e) => {
        dispatch(updateNewPostTextActionCreator(e.target.value));
    };

    return (
        <div className={styles.posts}>
            <div>
                <h3 className={styles.head}>My posts</h3>
                <div>
                    <div>
                        <textarea className={styles.textarea}
                                  ref={newPostElement}
                                  value={newPostText}
                                  onChange={onPostChange}
                        />
                    </div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {posts.map(({id, message, likeCount}) => <Post key={id} message={message} likeCount={likeCount} />)}
        </div>
    );
}

export default MyPosts;