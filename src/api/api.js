const axios = require('axios').default;

const instanceAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "93235bec-8cb3-4044-8eaa-f0dec3f7ab00"
    }
});

export const userAPI = {
    getFriends(currentPage = 1, pageSize = 10) {
        return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`, {})
    },
    follow(userid) {
        return instanceAPI.post(`follow/${userid}`)
    },
    unfollow(userid) {
        return instanceAPI.delete(`follow/${userid}`)
    },
    getUserProfileData(userid) {
        return instanceAPI.get(`profile/` + userid)
    },
    getUserStatus(userid) {
        return instanceAPI.get(`profile/status/` + userid)
    },
    setMeStatus(statusText) {
        return instanceAPI.put(`profile/status`, {status: statusText})
    }
}
export const authAPI = {
    login(email, password, rememberMe) {
        return instanceAPI.post('/auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    },
    logOut() {
        return instanceAPI.delete('/auth/login');
    },
    authMe() {
        return instanceAPI.get(`/auth/me`);
    }
}