import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextCreator, addMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

	let onMessageClick = () => {
		props.store.dispatch(addMessageCreator());
	};

	let onMessageChange = (e) => {
		let message = e.target.value;
		props.store.dispatch(updateNewMessageTextCreator(message));
	};

	return <Dialogs updateNewMessageText={onMessageChange} sendMessage={onMessageClick} dialogsPage={state} />;
};

export default DialogsContainer;
