import React from "react";
import styles from "./Post.module.css";

const Post = props => {
    return (
        <div className={styles.item}>
            <img src="https://photostocky.ru/wp-content/uploads/2019/02/krutye-foto-i-kartinki-v-vk-37.jpg" alt="" />
            <div className={styles.message}>{props.message}</div>
            <div className={styles.likeBlock}>
                <span className={styles.likesCount}>{props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;
