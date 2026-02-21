import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer.js";


const initialState = {
    posts: [
        {id: 1, message: "Вацап бро 🙌", likeCount: "15"},
        {id: 2, message: "Я изучаю React, а ты?", likeCount: "20"},
        {id: 3, message: "Давай вместе", likeCount: "10500"},
        {id: 4, message: "Нас уже 10500!!!!", likeCount: "1000001"},
    ],
    profile: null,
    status: "",
}


it('should be added new post with message', () => {
    const action = addPostActionCreator("New post")

    const newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(5)
});

it('should be added new post', () => {
    const newPostText = "New post";
    const action = addPostActionCreator(newPostText)

    const newState = profileReducer(initialState, action)
    expect(newState.posts[4].message).toBe(newPostText)
});

it('after deleting post length post should be increment', () => {
    const action = deletePost(1)

    const newState = profileReducer(initialState, action)
    expect(newState.posts.length).toBe(3)
});