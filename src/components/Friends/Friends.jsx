import React from 'react';
import styles from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
	let friendsElements = props.state.friends.map((friend) => (
		
		<Friend name={friend.name} id={friend.id} url={friend.url} key={friend.id} />
	));
	return (
		<div className={styles.friends}>
			<div className={styles.friendsItem}>{friendsElements}</div>
		</div>
	);
};

export default Friends;
