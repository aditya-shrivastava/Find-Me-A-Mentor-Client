import React from 'react';
import './App.css';
import { Footer, Navbar } from './Components';
import Home from './Pages/Home';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
