import React from 'react';
import styles from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {
	let friendsElements = props.state.friends.map((friend) => (
		<FriendItem name={friend.name} id={friend.id} url={friend.url} />
	));

	return (
		<div className={styles.friends}>
			<div className={styles.friendsItem}>{friendsElements}</div>
		</div>
	);
};

export default Friends;
