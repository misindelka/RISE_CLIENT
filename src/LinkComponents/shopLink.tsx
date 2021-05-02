import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { categoriesApi } from '../api/index';

const LinkTo = styled(NavLink)`
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	z-index: 0;
`;

type categories = { id: number; slug: string; name: string };

const ShopLink: React.FC = () => {
	const [categories, setCategories] = useState<categories[]>([]);

	useEffect(() => {
		axios.get(categoriesApi).then((res) => {
			setCategories(res.data);
		});
	}, []);
	const category = categories.map((i) => i.slug).find((i) => i);
	return (
		<>
			<LinkTo
				activeStyle={{
					fontWeight: 'bold',
					color: 'black',
				}}
				to={`./${category}`}
			/>
		</>
	);
};

export default ShopLink;
