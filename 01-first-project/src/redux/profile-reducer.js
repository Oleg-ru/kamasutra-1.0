import {profileAPI} from "../api/api.js";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

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

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
});

//санки
export const getUserProfile = (profileId) => async (dispatch) => {
    const response = await profileAPI.getProfile(profileId)
    dispatch(setUserProfile(response));
}
export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(response));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {

        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;