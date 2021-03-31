const axios = require('axios').default;

const instanceAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7a04673f-7e0d-4c78-8151-c3579526c00b"
    }
});

export const userAPI = {
    getFriends(currentPage = 1, pageSize = 10) {
        const params = new URLSearchParams([['page', currentPage], ['count', pageSize]]);
        // return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`, {})
        return instanceAPI.get('users', {params})
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
    },
    setMyInfo(myInfo) {
        return instanceAPI.put(`profile`, myInfo)
    },
    setMyAvatar(photo) {
        let formData = new FormData();
        formData.append("image", photo)
        return instanceAPI.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
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