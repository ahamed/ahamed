import React from 'react';
import style from './header.module.scss';

import Space from './space';

export default function Header() {
	return (
		<div className={style.header}>
			<div className={style.contents}>
				<div className={style.info}>
					Hey there, This is
					<strong className={style.name}> Sajeeb Ahamed.</strong> I'm
					a full stack developer, working for more than 4 years.
				</div>
			</div>
			<Space />
		</div>
	);
}
