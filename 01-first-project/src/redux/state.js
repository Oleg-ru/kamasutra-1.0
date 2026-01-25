const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Вацап бро 🙌", likeCount: "15"},
            {id: 2, message: "Я изучаю React, а ты?", likeCount: "20"},
            {id: 3, message: "Давай вместе", likeCount: "10500"},
            {id: 4, message: "Нас уже 10500!!!!", likeCount: "1000001"},
        ],
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
    }
}

export default state;