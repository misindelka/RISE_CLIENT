import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContentWrapper, Paper, PageWrapper } from '../../styles/components';
import { homeApi } from '../../api/pagesApis';

const Home: React.FC = () => {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		axios
			.get(homeApi)
			.then((res) => {
				setData(res.data);
			})
			.catch(() => console.log('! abouts not recieved !'));
	}, []);
	return (
		<PageWrapper>
			{data.map((item, i) => (
				<Paper key={i}>
					<ContentWrapper>
						≠<h2>{item.title}</h2>
					</ContentWrapper>
					<ContentWrapper>
						<p>{item.content}</p>
					</ContentWrapper>
				</Paper>
			))}
		</PageWrapper>
	);
};
export default Home;
