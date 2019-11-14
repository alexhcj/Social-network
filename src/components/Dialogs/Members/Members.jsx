import React from 'react';
import styles from './Members.module.css';
import Member from './Member/Member';

const Members = (props) => {
	let membersElements = props.members.map((member) => <Member name={member.name} id={member.id} key={member.id} />);

	return (
		<div className={styles.membersBlock}>
			<div className={styles.members}>{membersElements}</div>
		</div>
	);
};

export default Members;
