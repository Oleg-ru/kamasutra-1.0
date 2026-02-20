import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import {Field, Form} from 'react-final-form'
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators.js";
import {FormControls} from "../../common/FormControls/FormControls.jsx";

const MyPosts = React.memo((props) => {
    console.log("MyPost render")
    const {
        profilePage: {
            posts,
        },
        addPost,
    } = props;

    return (
        <div className={styles.posts}>
            <div>
                <h3 className={styles.head}>My posts</h3>
                <PostForm addPost={addPost}/>
            </div>
            {posts.map(({id, message, likeCount}) => <Post key={id} message={message} likeCount={likeCount}/>)}
        </div>
    );
});

function PostForm(props) {

    const onSubmit = (value, form) => {
        props.addPost(value.newPostMessage);
        form.restart();
    }

    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    // const FormControlsCustom = React.useCallback((props) => {
    //     return <Textarea {...props} styles={{[styles.textarea]: true}} />;
    // }, []);

    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit, form}) => (
                  <form onSubmit={(event) => handleSubmit(event, form)}>
                      <div>
                          <Field name="newPostMessage"
                                 validate={composeValidators(requiredField, maxLengthCreator(10))}
                                 component={FormControls}
                                 componentType={"textarea"}
                                 styles={[styles.textarea]}
                                 placeholder="О чем хочешь рассказать?"
                          />
                      </div>
                      <button type="submit">Add post</button>
                  </form>
              )
        }
        />
    );
}

export default MyPosts;