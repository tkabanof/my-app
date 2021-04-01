import FriendReducer, {followAC, setIsFEtching, unFollowAC} from "./friend-reducer.txt";

let testState =
    {
        items: [{id: 1, name: "Test", followed: false},
            {id: 2, name: "Test2", followed: true}],
        pageSize: 20,
        totalUserCount: 10,
        currentPage: 1,
        isFEtching: false,
        followInProcess: []
    }


it('unFollowAC', () => {
    //1. test data
    let action = unFollowAC(2);
    //2. action
    let newState = FriendReducer(testState, action);
    // 3 expectation
    expect(newState.items[1].followed).toBe(false);
});
it('followAC', () => {
    //1. test data
    let action = followAC(1);
    //2. action
    let newState = FriendReducer(testState, action);
    // 3 expectation
    expect(newState.items[0].followed).toBe(true);
});
it('setIsFEtching', () => {
    let action = setIsFEtching(true);
    let newState = FriendReducer(testState, action);
    expect(newState.isFEtching).toBe(true);
});