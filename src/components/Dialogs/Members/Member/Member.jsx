import React from 'react';
import styles from './Member.module.css';
import { NavLink } from 'react-router-dom';

const Member = (props) => {
	let path = '/dialogs/' + props.id;

	return <NavLink to={path} className={styles.link} activeClassName={styles.active}>{props.name}</NavLink>;
};

export default Member;
