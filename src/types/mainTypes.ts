export type initialStoreType = {
    userid: number | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth: boolean
}
export type userLoginData = {
    userid: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean

}
export type messageType = {
    message: string
    id: number
}

export type dialogType = {
    name: string
    id: number
}

export type messageStore = {
    dialogs: Array<dialogType>
    messages: Array<messageType>

}
export type photos = {
    small: string
    large: string
}
export type userItem = {
    id: number
    name: string
    status: string
    photos: photos
    followed: boolean
}
export type usersResponse = {
    items: userItem
    totalCount: number
    error: string
}