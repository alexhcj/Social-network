const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Galya" },
        { id: 3, name: "Lexa" },
        { id: 4, name: "Anton" },
        { id: 5, name: "Max" },
        { id: 6, name: "Vlados" }
    ],
    messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hi, you" },
        { id: 3, message: "Hi, you bro" },
        { id: 4, message: "Hi, how are you?" }
    ],
    newMessageText: ""
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextCreator = (message) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: message });

export default dialogsReducer;