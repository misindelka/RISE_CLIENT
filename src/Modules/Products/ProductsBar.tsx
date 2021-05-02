import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { categoriesApi } from '../../api/index';
import { BarWrapper, LinkTo } from '../../styles/components';

type categories = { id: number; slug: string; name: string };

const ProductsBar: React.FC = () => {
	const [categories, setCategories] = useState<categories[]>([]);
	useEffect(() => {
		axios.get(categoriesApi).then((res) => {
			setCategories(res.data);
		});
	}, []);

	return (
		<BarWrapper>
			{categories.map((category, i) => (
				<LinkTo
					activeStyle={{
						fontWeight: 'bold',
					}}
					key={i}
					to={category.slug}>
					{category.name}
				</LinkTo>
			))}
		</BarWrapper>
	);
};

export default ProductsBar;
