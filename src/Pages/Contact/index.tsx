import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { contactApi } from '../../api/pagesApis';
import { Paper, PageWrapper } from '../../styles/components';

const Contacts: React.FC = () => {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		axios
			.get(contactApi)
			.then((res) => {
				setData(res.data);
			})
			.catch(() => console.log('! abouts not recieved !'));
	}, []);
	console.log(data);

	return (
		<PageWrapper>
			<Paper>
				{data.map((item, i) => (
					<div key={i}>
						<h2>{item.title}</h2>
						<p>{item.streetName}</p>
						<p>{item.city}</p>
						<p>{item.country}</p>
						<p>{item.phone}</p>
						<p>{item.email}</p>
					</div>
				))}
			</Paper>
		</PageWrapper>
	);
};

export default Contacts;
