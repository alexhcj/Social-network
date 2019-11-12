import React from 'react';
import styles from '../Friends.module.css';
import { NavLink } from 'react-router-dom';

const FriendItem = (props) => {
	let path = '/friends/' + props.id;

	return (
		<div className={styles.item}>
			<div className={styles.friendImg}>
				<NavLink to={path}>
					<img src={props.url} alt="" />
				</NavLink>
			</div>
			<div className={styles.friendName}>
				<NavLink to={path}>{props.name}</NavLink>
			</div>
		</div>
	);
};
export default FriendItem;
