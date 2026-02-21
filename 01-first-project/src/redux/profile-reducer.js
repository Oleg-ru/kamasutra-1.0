import {profileAPI} from "../api/api.js";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

const initialState = {
    posts: [
        {id: 1, message: "Вацап бро 🙌", likeCount: "15"},
        {id: 2, message: "Я изучаю React, а ты?", likeCount: "20"},
        {id: 3, message: "Давай вместе", likeCount: "10500"},
        {id: 4, message: "Нас уже 10500!!!!", likeCount: "1000001"},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            const newPost = {
                id: crypto.randomUUID(),
                message: action.newPostText,
                likeCount: "0",
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.postId)
            };
        }

        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,
    newPostText
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
});
export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
});

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
});

//санки
export const getUserProfile = (profileId) => {
    return (dispatch) => {
        profileAPI.getProfile(profileId)
            .then((data) => {
                dispatch(setUserProfile(data));
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then((data) => {
                dispatch(setStatus(data));
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(data));
                }
            })
    }
}

export default profileReducer;