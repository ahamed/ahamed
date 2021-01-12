import React from 'react';

import Plane from './plane';

export default function Space() {
	return (
		<div>
			{[...Array(5).fill().keys()].map(num => (
				<Plane key={num} />
			))}
		</div>
	);
}
