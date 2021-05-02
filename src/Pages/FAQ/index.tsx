import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faqApi, faqFormApi } from '../../api/pagesApis';
import FaqForm from './faqForm';
import { ContentWrapper, PageWrapper, Paper } from '../../styles/components';

const Faq: React.FC = () => {
	const [data, setData] = useState<any>([]);
	const [title, setTitle] = useState<any>([]);

	useEffect(() => {
		axios
			.get(faqApi)
			.then((res) => {
				setData(res.data);
			})
			.catch(() => console.log('! abouts not recieved !'));
	}, []);

	console.log(title);

	useEffect(() => {
		axios
			.get(faqFormApi)
			.then((res) => {
				setTitle(res.data);
			})
			.catch(() => console.log('! abouts not recieved !'));
	}, []);

	console.log(data);

	return (
		<PageWrapper>
			<ContentWrapper>
				<ContentWrapper>
					{title.map((item, i) => (
						<Paper key={i}>
							<h2>{item.title}</h2>
						</Paper>
					))}
				</ContentWrapper>

				<ContentWrapper>
					{data.map((item, i) => (
						<FaqForm key={i} item={item} />
					))}
				</ContentWrapper>
			</ContentWrapper>
		</PageWrapper>
	);
};

export default Faq;
