import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const homePage: NextPage = () => {
	const [state, setstate] = useState('');

	useEffect(() => {
		setstate('sdfsdf');
	}, []);

	console.log('sdfsddf');

	return <div />;
};

export default homePage;
