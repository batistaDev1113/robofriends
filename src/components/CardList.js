import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	const cardsArray = robots.map((user, index) => {
		return (
			<Card name={robots[index].name} email={robots[index].email} id={robots[index].id} key={robots[index].id} />
		);
	});
	return <React.StrictMode>{cardsArray}</React.StrictMode>;
};

export default CardList;
