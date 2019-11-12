import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.item}>
                    <NavLink to="/profile" className={styles.link} activeClassName={styles.active}>
                        Profile
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/friends" className={styles.link} activeClassName={styles.active}>
                        Friends
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/dialogs" className={styles.link} activeClassName={styles.active}>
                        Messages
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news" className={styles.link} activeClassName={styles.active}>
                        News
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/music" className={styles.link} activeClassName={styles.active}>
                        Music
                    </NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/settings" className={styles.link} activeClassName={styles.active}>
                        Settings
                    </NavLink>
                </div>
            </nav>
        </div>
	);
};

export default Navbar;
