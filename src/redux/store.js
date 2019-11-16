import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 23 },
                { id: 3, message: "Hello bro", likesCount: 17 }
            ],
            newPostText: "alex_hcj"
        },
        dialogsPage: {
            members: [
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
        },
        friendsPage: {
            friends: [
                { id: 1, name: "Valera", url: "http://deal-com.ru/wp-content/uploads/2016/05/%D0%BF%D0%BE%D1%80%D0%BE%D1%87%D0%BA%D0%B8%D0%BD.png" },
                { id: 2, name: "Galya", url: "https://borismeltser.com/images/couch-otziv/zalina-min.png" },
                { id: 3, name: "Lexa", url: "https://rb.ru/media/upload_tmp/startups_and_ads_zaydullin_ruslan.png" },
                { id: 4, name: "Anton", url: "https://i2.wp.com/apptractor.ru/wp-content/uploads/2017/05/rounded_corners.png?resize=256%2C256&ssl=1" },
                { id: 5, name: "Max", url: "http://advokat177.ru/wp-content/uploads/2018/06/1.png" },
                { id: 6, name: "Vlados", url: "https://blog.relap.ru/wp-content/uploads/2016/02/circle-7.png" }
            ],
        }

    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;