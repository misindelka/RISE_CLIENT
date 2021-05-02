import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ContentWrapper, Paper, PageWrapper } from '../../styles/components';
import { aboutApi } from '../../api/pagesApis';

const About: React.FC = () => {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		axios
			.get(aboutApi)
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
						<h2>{item.head}</h2>
					</ContentWrapper>
					<ContentWrapper>
						<p>{item.about}</p>
					</ContentWrapper>
				</Paper>
			))}
		</PageWrapper>
	);
};

export default About;
