import profileReducer, {addPost} from "./profile-reducer";

let testState = {
    postsItems: [
        {id: 1, message: 'Lorem ipsum dolor sit amet', likes: 15},
        {id: 2, message: 'But I must explain to you how all this mistaken idea', likes: 45},
        {id: 3, message: 'On the other hand, we denounce with', likes: 1},
    ],
    postsIsFEtching: false,
    profileStatus: "Text Status Example",
    profileInfodata: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "samurai dimych",
        "userId": 2,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    profileInfoIsFEtching: false
}

it('testAdd', () => {
    //1. test data
    let action = addPost("Test Text");
    //2. action
    let newState = profileReducer(testState, action);
    // 3 expectation
    expect(newState.postsItems.length).toBe(4);
});
