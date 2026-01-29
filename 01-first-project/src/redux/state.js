let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Вацап бро 🙌", likeCount: "15"},
                {id: 2, message: "Я изучаю React, а ты?", likeCount: "20"},
                {id: 3, message: "Давай вместе", likeCount: "10500"},
                {id: 4, message: "Нас уже 10500!!!!", likeCount: "1000001"},
            ],
            newPostText: 'Расскажи что нового....'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hi", isSelf: true, avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"},
                {id: 2, message: "Hello!!!", isSelf: false, avatar: "https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg"},
                {id: 3, message: "How are you?", isSelf: true, avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"},
                {id: 4, message: "Allloooooo", isSelf: true, avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"},
                {id: 5, message: "By", isSelf: false, avatar: "https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg"},
            ],
            dialogs: [
                {id: 1, name: 'Vladimir', avatar: "https://cdn-icons-png.flaticon.com/512/4792/4792944.png"},
                {id: 2, name: 'Anton', avatar: "https://cdn-icons-png.flaticon.com/512/4792/4792944.png"},
                {id: 3, name: 'Anastasia', avatar: "https://img.freepik.com/free-vector/woman-with-long-dark-hair_1308-176666.jpg"},
            ],
            newMessageText: 'New message here....'
        },
        friendsPage: {
            topThree: [
                {id: 1, name: "Oleg", logo: "🥽"},
                {id: 2, name: "Anastasia", logo: "🎪"},
                {id: 3, name: "Egor", logo: "🎡"},
            ]
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber () {
        console.log("this._state changed")
    },
    addPost () {
        const newPost = {
            id: crypto.randomUUID(),
            message: this._state.profilePage.newPostText,
            likeCount: "0",
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    addMessage () {
        const newMessage = {
            id: crypto.randomUUID(),
            message: this._state.dialogsPage.newMessageText,
            isSelf: true,
            avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
}

store.addPost = store.addPost.bind(store);
store.updateNewPostText = store.updateNewPostText.bind(store);
store.addMessage = store.addMessage.bind(store);
store.updateNewMessageText = store.updateNewMessageText.bind(store);

window.store = store;

export default store;