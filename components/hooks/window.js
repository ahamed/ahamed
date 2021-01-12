import { useState, useEffect } from 'react';

export const useWindow = () => {
	const [size, setSize] = useState({
		height: undefined,
		width: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({ width: window.innerWidth, height: innerHeight });
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return size;
};
