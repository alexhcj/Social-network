import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextCreator, addMessageCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {
	let state = props.store.getState().dialogsPage;
	let dialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />);
	let messagesElements = state.messages.map((message) => <Message message={message.message} id={message.id} key={message.id} />);
	let newMessageText = state.newMessageText;

	let onMessageClick = () => {
		props.store.dispatch(addMessageCreator());
	};

	let onMessageChange = (e) => {
		let message = e.target.value;
		props.store.dispatch(updateNewMessageTextCreator(message));
	};

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>{dialogsElements}</div>
			<div className={styles.messagesBlock}>
				<div className={styles.messages}>{messagesElements}</div>
			</div>
			<div>
				<textarea placeholder={'Enter your message'} onChange={onMessageChange} value={newMessageText} />
			</div>
			<div>
				<button onClick={onMessageClick}>Send</button>
			</div>
		</div>
	);
};

export default Dialogs;
