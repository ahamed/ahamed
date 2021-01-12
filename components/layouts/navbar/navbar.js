import React from 'react';

import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='navbar navbar-dark bg-dark'>
			<div className='container-fluid'>
				<div className='collapse navbar-collapse'>
					<ul className='navbar-nav me-auto'>
						<li className='nav-item'>
							<Link href='/'>
								<a href='' className='nav-link'>
									Home
								</a>
							</Link>
							<Link href='/about'>
								<a href='' className='nav-link'>
									About
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
