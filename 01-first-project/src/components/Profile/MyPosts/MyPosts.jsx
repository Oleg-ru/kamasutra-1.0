import React, {useRef} from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post.jsx";

function MyPosts(props) {

    console.log(props)

    const {
        posts,
        addPost: addNewPost,
    } = props;

    const newPostElement = useRef(null);

    const addPost = () => {
        const text = newPostElement.current.value;
        addNewPost(text);
    };

    return (
        <div className={styles.posts}>
            <div>
                <h3 className={styles.head}>My posts</h3>
                <div>
                    <div>
                        <textarea className={styles.textarea} ref={newPostElement}></textarea>
                    </div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {posts.map(({id, message, likeCount}) => <Post key={id} message={message} likeCount={likeCount} />)}
        </div>
    );
}

export default MyPosts;