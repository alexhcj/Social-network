import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import { addMessageCreator, updateNewMessageTextCreator } from '../../../redux/state';

const Messages = (props) => {
	let messagesElements = props.messages.map((message) => <Message message={message.message} id={message.id} key={message.id} />);

	let onMessageClick = () => {
		props.dispatch(addMessageCreator());
	};

	let onMessageChange = (e) => {
		let message = e.target.value;
		props.dispatch(updateNewMessageTextCreator(message));
	};

	return (
		<div className={styles.messagesBlock}>
			<div className={styles.messages}>{messagesElements}</div>
			<div>
				<textarea placeholder={'Enter your message'} onChange={onMessageChange} value={props.newMessageText} />
			</div>
			<div>
				<button onClick={onMessageClick}>Send</button>
			</div>
		</div>
	);
};

export default Messages;
