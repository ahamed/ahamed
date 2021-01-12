import React from 'react';
import style from './banner.module.scss';

export default function Banner({ text, direction }) {
	return (
		<span
			className={style.banner}
			style={{ transform: `rotateY(${direction ? 0 : '-180deg'})` }}
		>
			{text}
		</span>
	);
}
