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
    follow(id) {
        return instance.post(`/follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`/follow/${id}`)
            .then(response => response.data)
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    },

    //авторизация после логина, пихает токен (полученный из login) в метод авторизован ли я
    authMePostLogin(token) {
        return axios.get(`${API_BASE}/auth/me`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "API-KEY": `${import.meta.env.VITE_API_KEY}`,
            }
        })
            .then(response => response.data)
    },

    login(email, password, rememberMe = false, captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },

    logout() {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`/security/get-captcha-url`);
    },
}

export const profileAPI = {
    getProfile(profileId) {
        return instance.get(`/profile/${profileId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(
            `/profile/status`,
            {status: status}
        )
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`/profile/photo`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
    saveProfile(profile) {
        return instance.put(`/profile`, profile)
    }
}