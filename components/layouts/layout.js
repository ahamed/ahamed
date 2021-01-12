import React from 'react';

import Navbar from './navbar/navbar';
import Header from './header/header';

export default function Layout({ children }) {
	return (
		<div className='ahamed-container'>
			<Header />
			<Navbar />
			<div className='container'>{children}</div>;
		</div>
	);
}
