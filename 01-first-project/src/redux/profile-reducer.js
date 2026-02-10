import {profileAPI} from "../api/api.js";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    posts: [
        {id: 1, message: "Вацап бро 🙌", likeCount: "15"},
        {id: 2, message: "Я изучаю React, а ты?", likeCount: "20"},
        {id: 3, message: "Давай вместе", likeCount: "10500"},
        {id: 4, message: "Нас уже 10500!!!!", likeCount: "1000001"},
    ],
    newPostText: 'Расскажи что нового....',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: crypto.randomUUID(),
                message: state.newPostText,
                likeCount: "0",
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
});

//санки
export const getProfile = (profileId) => {
    return (dispatch) => {
        if (!profileId) {
            profileId = 2;
        }

        profileAPI.getProfile(profileId)
            .then((data) => {
                dispatch(setUserProfile(data));
            })
    }
}

export default profileReducer;