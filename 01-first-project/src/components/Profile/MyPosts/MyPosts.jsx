import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

function MyPosts(props) {

    const {
        posts,
        addPost: addNewPost,
        newPostText,
        updateNewPostText,
    } = props;

    const newPostElement = useRef(null);

    const addPost = () => {
        addNewPost();
    }

    const onPostChange = (e) => {
        updateNewPostText(e.target.value);
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