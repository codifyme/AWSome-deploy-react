import React from 'react';
import logo from './awsome.png';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>THIS IS A REACT APP FOR COMPLETE CODING</p>
				<a
					className='App-link'
					href='https://codifyme.github.io/AWSome-deploy-react/'
					target='_blank'
					rel='noopener noreferrer'
				>
					LEARN SERVELESS
				</a>
			</header>
		</div>
	);
}

export default App;
