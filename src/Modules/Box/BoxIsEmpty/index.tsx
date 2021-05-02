import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ShopLink from '../../../LinkComponents/shopLink';
import { Paper, ContentContainer, NavContainer } from '../styles/boxComponents';
import { boxIsEmptyLabelSk } from '../../../constants/labels';

const Image = styled.img`
	width: 50vh;
`;

const BoxIsEmpty: React.FC = () => {
	const { t } = useTranslation();
	return (
		<ContentContainer>
			<Paper>
				<ContentContainer>
					<h3>{boxIsEmptyLabelSk}</h3>
				</ContentContainer>
				<Image src={`${process.env.PUBLIC_URL}/assets/logo-circle.png`} />
				<NavContainer>
					<h4>{t('boxBackToShoppingButton')}</h4>
					<ShopLink />
				</NavContainer>
			</Paper>
		</ContentContainer>
	);
};

export default BoxIsEmpty;
