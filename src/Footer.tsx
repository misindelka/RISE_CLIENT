import React from 'react';
import styled from 'styled-components';
import { LogoBlackText } from './api/images';

const imgUrl = LogoBlackText;
const FootWrapper = styled.div`
	background: ${props => props.theme.primaryBoxShadow};
	display: flex;
	padding: ${props => props.theme.smallPadding};
`;

const Image = styled.img`
	display: flex;
	margin-left: auto;
	margin-right: 40px;
	max-height: 30px;
`;

const Footer = () => (
	<FootWrapper>
		<Image src={imgUrl} />
	</FootWrapper>
);

export default Footer;
