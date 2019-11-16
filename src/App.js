import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Route
					path="/profile"
					render={() => <Profile store={props.store} />}
				/>
				<Route path="/friends" render={() => <Friends state={props.state.friendsPage} />} />
				<Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
				<Route path="/news" component={Profile} />
				<Route path="/music" component={Profile} />
				<Route path="/settings" component={Profile} />
			</div>
		</div>
	);
};

export default App;

/* 
* TODO:
* - Add friends block + state data
* - Add textarea to write messages + display them + state data
*/
