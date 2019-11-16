let initialState = {
    friends: [
        { id: 1, name: "Valera", url: "http://deal-com.ru/wp-content/uploads/2016/05/%D0%BF%D0%BE%D1%80%D0%BE%D1%87%D0%BA%D0%B8%D0%BD.png" },
        { id: 2, name: "Galya", url: "https://borismeltser.com/images/couch-otziv/zalina-min.png" },
        { id: 3, name: "Lexa", url: "https://rb.ru/media/upload_tmp/startups_and_ads_zaydullin_ruslan.png" },
        { id: 4, name: "Anton", url: "https://i2.wp.com/apptractor.ru/wp-content/uploads/2017/05/rounded_corners.png?resize=256%2C256&ssl=1" },
        { id: 5, name: "Max", url: "http://advokat177.ru/wp-content/uploads/2018/06/1.png" },
        { id: 6, name: "Vlados", url: "https://blog.relap.ru/wp-content/uploads/2016/02/circle-7.png" }
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state;
}

export default friendsReducer;