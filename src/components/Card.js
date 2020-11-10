import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='bg-light-green dib br1 pa1 ma2 grow bw1 tc shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='' />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
