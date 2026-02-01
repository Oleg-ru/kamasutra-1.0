const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    messages: [
        {
            id: 1,
            message: "Hi",
            isSelf: true,
            avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
        },
        {
            id: 2,
            message: "Hello!!!",
            isSelf: false,
            avatar: "https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg"
        },
        {
            id: 3,
            message: "How are you?",
            isSelf: true,
            avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
        },
        {
            id: 4,
            message: "Allloooooo",
            isSelf: true,
            avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
        },
        {
            id: 5,
            message: "By",
            isSelf: false,
            avatar: "https://img.freepik.com/free-photo/grateful-charming-lovely-redhead-woman-appreciate-help-thanking-bowing-politely-with-namaste-gesture-hold-hands-together-chest-pray-sign-smiling-pleased-white-background_1258-72994.jpg"
        },
    ],
    dialogs: [
        {id: 1, name: 'Vladimir', avatar: "https://cdn-icons-png.flaticon.com/512/4792/4792944.png"},
        {id: 2, name: 'Anton', avatar: "https://cdn-icons-png.flaticon.com/512/4792/4792944.png"},
        {id: 3, name: 'Anastasia',avatar: "https://img.freepik.com/free-vector/woman-with-long-dark-hair_1308-176666.jpg"},
    ],
    newMessageText: 'New message here....'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE: {
            const newMessage = {
                id: crypto.randomUUID(),
                message: state.newMessageText,
                isSelf: true,
                avatar: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
            };
            const stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            const stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
});

export default dialogsReducer;