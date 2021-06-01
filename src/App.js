import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Profile from './Pages/Profile';
import Error from './Pages/Error';

import { Footer, Navbar } from './Components';

import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';
import Mentors from './Pages/Mentors';

let logoutTimer;

function App() {
	const [token, setToken] = useState();
	const [tokenExpiration, setTokenExpiration] = useState();
	const dispatch = useDispatch();

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
					<Route path='/profile'>
						<Profile />
					</Route>
					<Route path='/categories/:cname'>
						<Mentors />
					</Route>
					<Route path='*'>
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
