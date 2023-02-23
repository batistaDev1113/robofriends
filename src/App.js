import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import TagManager from 'react-gtm-module';
import CardList from './components/CardList';
import './App.css';
import Scroll from './components/Scroll';

const App = () => {
	const [ robots, setRobots ] = useState([]);
	const [ searchField, setSearchField ] = useState('');

	useEffect(() => {
		const tagManagerArgs = {
			gtmId: 'GTM-TQBDBCC'
		}
		TagManager.initialize(tagManagerArgs);

		fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((user) => setRobots(user));
	}, []);

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	};

	const filteredRobots = robots.filter((robots) => {
		return robots.name.toLowerCase().includes(searchField.toLowerCase());
	});

	return (
		<div className='tc'>
			<h1> 🤖 Robofriends 🤖</h1>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	);
};

export default App;
