/* eslint-disable react/display-name */
import React from 'react';
import styled from 'styled-components';
import About from './Pages/About/index';
import Faq from './Pages/FAQ/index';
import Contacts from './Pages/Contact/index';
import Gallery from './Pages/Gallery/index';
import Products from './Modules/Products/index';
import Box from './Modules/Box/index';
import Auth from './Modules/Auth/index';
import Summary from './Modules/Box/Summary/index';
import Order from './Modules/Box/Order/index';

const Placeholder = styled.div`
	align-items: center;
	height: 100%;
	justify-content: center;
	margin-left: 100px;
	margin-top: 50px;
	position: fixed;
	width: 100%;
`;

const ComponentPlaceholder = ({ label }: { label: string }) => (
	<Placeholder>
		<h1>{`ready for ${label} component and functionality`}</h1>
	</Placeholder>
);
const routes = [
	{
		path: '/About',
		component: About,
		routeName: 'About',
	},
	{
		path: '/Faq',
		component: Faq,
		routeName: 'Faq',
	},
	{
		path: '/Gallery',
		component: Gallery,
		routeName: 'Gallery',
	},
	{
		path: '/Contacts',
		component: Contacts,
		routeName: 'Contacts',
	},
	{
		path: '/Box',
		component: Box,
		routeName: 'Box',
	},
	{
		path: '/Summary',
		component: Summary,
		routeName: 'Summary',
	},
	{
		path: '/Order',
		component: Order,
		routeName: 'Order',
	},
	{
		path: '/Auth',
		component: Auth,
		routeName: 'Auth',
	},
	{
		path: '/:category_id',
		component: Products,
		routeName: 'Category',
	},

	{
		path: '/OtherComponents',
		component: () => <ComponentPlaceholder label='OtherComponents' />,
		routeName: 'OtherComponents',
	},
];

export { routes as default };
