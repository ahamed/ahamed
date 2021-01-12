import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import style from './plane.module.scss';
import { getRandom, mapRange } from '../../../utils';

const texts = ['PHP', 'JavaScript', 'React', 'NextJs'];
const sizes = [
	[60, 40],
	[72, 48],
	[78, 52],
	[84, 56],
	[90, 60],
];

export default function Plane() {
	const [left, setLeft] = useState(0);
	const [top, setTop] = useState(0);
	const [size, setSize] = useState({
		width: 60,
		height: 40,
	});
	const [speed, setSpeed] = useState(1);
	const [direction, setDirection] = useState(0);
	const interval = useRef(null);

	useEffect(() => {
		setLeft(getRandom(0, window.innerWidth));
		setTop(getRandom(0, 350));
		setDirection(getRandom(0, 1));
		const sizeIndex = getRandom(0, texts.length - 1);
		const [w, h] = sizes[sizeIndex];
		setSize({
			width: w,
			height: h,
		});
		setSpeed(mapRange(0, 4, 1, 3, sizeIndex));

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (interval.current) clearInterval(interval.current);

		if (direction) {
			interval.current = setInterval(() => {
				setLeft(val => val + speed);
				if (left >= window.innerWidth - size.width) {
					setDirection(0);
				}
			}, 10);
		} else {
			interval.current = setInterval(() => {
				setLeft(val => val - speed);
				if (left <= 0 - size.width) {
					setDirection(1);
				}
			}, 10);
		}
	}, [left, direction]);

	return (
		<div
			className={style.plane}
			style={{
				top,
				left,
				transform: `rotateY(${direction ? 0 : '180deg'})`,
			}}
		>
			<Image
				src='/images/plane.png'
				width={size.width}
				height={size.height}
			/>
		</div>
	);
}
