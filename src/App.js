import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Friends from './components/Friends/Friends';

const App = (props) => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="app-wrapper-content">
				<Route
					path="/profile"
					render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
				/>
				<Route path="/friends" render={() => <Friends state={props.state.friendsPage} />} />
				<Route
					path="/dialogs"
					render={() => <Dialogs store={props.store} />}
				/>
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
