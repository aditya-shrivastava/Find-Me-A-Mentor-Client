import React from 'react';
import './App.css';
import { Footer, Navbar } from './Components';
import Home from './Pages/Home';
import OurTeam from './Pages/OurTeam';
import Profile from './Pages/Profile';
import Error from './Pages/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
	return (
		<div className='app'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>
					<Route exact path="/team" >
						<OurTeam />
					</Route>
					<Route>
						<Profile />
					</Route>
					<Route path="*" >
						<Error />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
