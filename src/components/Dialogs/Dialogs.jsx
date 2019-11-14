import React from 'react';
import styles from './Dialogs.module.css';
import Members from './Members/Members';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
	return (
		<div className={styles.dialogsBlock}>
			<div className={styles.membersBlock}>
				<Members members={props.dialogsPage.members} />
			</div>
			<div className={styles.messagesBlock}>
				<Messages
					className={styles.messagesBlock}
					messages={props.dialogsPage.messages}
					newMessageText={props.dialogsPage.newMessageText}
					dispatch={props.dispatch}
				/>
			</div>
		</div>
	);
};

export default Dialogs;
