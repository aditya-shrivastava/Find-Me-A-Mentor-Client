import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error';
import Mentors from './Pages/Mentors';
import Profile from './Pages/Profile';
import Meeting from './Pages/Meeting';

import { Footer, Navbar } from './Components';

import Peer from 'peerjs';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

let logoutTimer;
const myPeer = new Peer();
const socket = io(`http://localhost:5001/`);

function App() {
	const [me, setMe] = useState('');
	const [token, setToken] = useState();
	const [tokenExpiration, setTokenExpiration] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		myPeer.on('open', (id) => {
			setMe(id);
		});
	}, []);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem('userData'));
		if (userData) {
			const { user, token, expiration } = userData;
			if (user && token && new Date(expiration) > new Date()) {
				setToken(token);
				setTokenExpiration(expiration);
				dispatch(
					login({
						user: user,
						token: token,
						expiration: new Date(expiration).toISOString(),
					})
				);
			}
		}
	}, [dispatch]);

	useEffect(() => {
		if (token && tokenExpiration) {
			const remainingTime =
				new Date(tokenExpiration).getTime() - new Date().getTime();
			logoutTimer = setTimeout(() => {
				dispatch(logout());
			}, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, tokenExpiration, dispatch]);

	return (
		<div className='app'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/team'>
						<OurTeam />
					</Route>
					<Route path='/dashboard'>
						<Dashboard />
					</Route>
					<Route path='/profile/:id'>
						<Profile />
					</Route>
					<Route path='/categories/:cname'>
						<Mentors />
					</Route>
					<Route path='/meeting/:id'>
						<Meeting myPeer={myPeer} me={me} socket={socket} />
					</Route>
					<Route path='*'>
						<Error />
					</Route>
				</Switch>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
