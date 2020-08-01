import React from 'react';
import logo from './awsome.png';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>This is a react app for complete coding</p>
				<a
					className='App-link'
					href='https://codifyme.github.io/AWSome-deploy-react/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn Serveless
				</a>
			</header>
		</div>
	);
}

export default App;
