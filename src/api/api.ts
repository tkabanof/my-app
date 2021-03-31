import axios from 'axios';

const instanceAPI = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7a04673f-7e0d-4c78-8151-c3579526c00b"
    }
});

export const userAPI = {
    getFriends(currentPage: number = 1, pageSize: number = 10, term: string | undefined, friend: boolean | undefined) {

        const params = new URLSearchParams({
            page: String(currentPage),
            count: String(pageSize)
        });
        if (term !== undefined)  params.append('term', String(term))
        if (friend !== undefined)  params.append('friend', String(friend))

        // return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`, {})
        return instanceAPI.get('users', {params})
    },
    follow(userid: number) {
        return instanceAPI.post(`follow/${userid}`)
    },
    unfollow(userid: number) {
        return instanceAPI.delete(`follow/${userid}`)
    },
    getUserProfileData(userid: number) {
        return instanceAPI.get(`profile/` + userid)
    },
    getUserStatus(userid: number) {
        return instanceAPI.get(`profile/status/` + userid)
    },
    setMeStatus(statusText: string) {
        return instanceAPI.put(`profile/status`, {status: statusText})
    },
    setMyInfo(myInfo: any) {
        return instanceAPI.put(`profile`, myInfo)
    },
    setMyAvatar(photo: any) {
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
    login(email: string, password: string, rememberMe: boolean) {
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