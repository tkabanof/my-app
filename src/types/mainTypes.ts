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
export type photosType = {
    small: string
    large: string
}
export type userItemType = {
    id: number
    name: string
    status: string
    photos: photosType
    followed: boolean
}
export type usersResponseType = {
    items: userItemType
    totalCount: number
    error: string
}

export type postsItemType = {
    id: number
    message: string
    likes: number
}
export type contactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type profileInfodataType = {
    userId: number
    lookingForAJobDescription: string
    aboutMe: string
    lookingForAJob: boolean
    fullName: string
    contacts: contactsType
    photos: photosType
}