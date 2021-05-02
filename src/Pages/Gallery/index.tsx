import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { galleryApi } from '../../api/pagesApis';
import { ContentWrapper, Paper, PageWrapper } from '../../styles/components';

const Gallery: React.FC = () => {
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		axios
			.get(galleryApi)
			.then((res) => {
				setData(res.data);
			})
			.catch(() => console.log('! abouts not recieved !'));
	}, []);

	console.log(data);
	return (
		<PageWrapper>
			<Paper>
				<ContentWrapper>HERE WILL COMES GALLERY</ContentWrapper>
			</Paper>
		</PageWrapper>
	);
};
export default Gallery;
