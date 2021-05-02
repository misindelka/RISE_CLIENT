import React from 'react';
import { BarWrapper, LinkTo } from '../../styles/components';

const BoxBar = () => (
	<BarWrapper>
		<LinkTo
			activeStyle={{
				fontWeight: 'bold',
			}}
			to='./Box'>
			Bednička
		</LinkTo>
		<LinkTo
			activeStyle={{
				fontWeight: 'bold',
			}}
			to='./Summary'>
			Rekapitulácia
		</LinkTo>
		<LinkTo
			activeStyle={{
				fontWeight: 'bold',
			}}
			to='./Order'>
			Dokončenie Obednávky
		</LinkTo>
	</BarWrapper>
);

export default BoxBar;
