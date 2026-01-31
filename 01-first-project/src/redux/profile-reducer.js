const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: "Вацап бро 🙌", likeCount: "15"},
        {id: 2, message: "Я изучаю React, а ты?", likeCount: "20"},
        {id: 3, message: "Давай вместе", likeCount: "10500"},
        {id: 4, message: "Нас уже 10500!!!!", likeCount: "1000001"},
    ],
    newPostText: 'Расскажи что нового....'
}

const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: crypto.randomUUID(),
                message: state.newPostText,
                likeCount: "0",
            };

            state.posts.push(newPost);
            state.newPostText = '';
        }
            break;

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
        }
            break;
    }
    return state;
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;