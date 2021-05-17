import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Profile from './Pages/Profile';
import Error from './Pages/Error';

import { Footer, Navbar } from './Components';

import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) {
			dispatch(logout());
		} else {
			dispatch(login(user.user));
		}
	}, []);

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
