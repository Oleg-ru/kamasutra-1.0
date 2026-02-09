import axios from "axios";

const USE_PROXY = true; // переключить на false когда API будет работать напрямую

export const API_BASE = USE_PROXY
    ? 'https://corsproxy.io/?https://social-network.samuraijs.com/api/1.0'
    : 'https://social-network.samuraijs.com/api/1.0';

const instance = axios.create({
    baseURL: `${API_BASE}`,
    headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_BEARER_KEY}`,
        "API-KEY": `${import.meta.env.VITE_API_KEY}`,
    }
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const followUnfollowAPI = {
    follow (id) {
        return instance.post(`/follow/${id}`)
            .then(response => response.data)
    },
    unfollow (id) {
        return instance.delete(`/follow/${id}`)
            .then(response => response.data)
    },
}

export const authMeAPI = {
    authMe () {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (profileId) {
        return  instance.get(`/profile/${profileId}`)
            .then(response => response.data)
    }
}