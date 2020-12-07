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
        return instanceAPI.get(`users?page=${currentPage}&count=${pageSize}`, {}).then(response => {
            return response.data;
        })
    },

    follow(userid) {
        return instanceAPI.post(`follow/${userid}`)
            .then(response => {
                return response.data;
            })

    },
    unfollow(userid) {
        return instanceAPI.delete(`follow/${userid}`)
            .then(response => {
                return response.data;
            })
    }
}