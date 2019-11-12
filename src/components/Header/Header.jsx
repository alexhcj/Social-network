import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src="https://img.pngio.com/vkontakte-logo-png-vkontakte-png-512_512.png"
                alt="Logo"
            />
        </header>
    );
};

export default Header;
