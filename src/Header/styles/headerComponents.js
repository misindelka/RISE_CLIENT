import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const HeadContainer = styled.div`
	align-items: center;
	background: ${props => props.theme.cardTransparencyGrey};
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	top: 0;
	width: 100%;
	@media (max-width: 768px) {
		flex-direction: column;
		flex: 1 auto 1;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: left;
	padding: ${props => props.theme.smallPadding};
`;

export const Image = styled.img`
	max-height: ${props => props.theme.primaryImgSize};
	:hover {
		transform: scale(1.02);
		transition: transform 0.1s;
	}
`;
export const BoxIcon = styled.img`
	height: ${props => props.theme.primaryIconSize};
	:hover {
		transform: scale(1.1);
		transition: transform 0.3s;
	}
`;

export const IconWrapper = styled.div`
	height: ${props => props.theme.primaryIconSize};
	padding: ${props => props.theme.secondaryPadding};
	:hover {
		transform: scale(1.05);
		transition: transform 0.3s;
	}
`;

export const LinkTo = styled(Link)`
	color: ${props => props.theme.textGrey};
	cursor: pointer;
	:hover {
		transform: scale(1.05);
		transition: transform 0.2s;
	}
`;

export const TopLink = styled(NavLink)`
	color: ${props => props.theme.textGrey};
	cursor: pointer;
	font-size: ${props => props.theme.primaryFontSize};
	padding: ${props => props.theme.primaryPadding};
	text-decoration: none;
	:hover {
		transform: scale(1.1);
		transition: transform 0.2s;
	}
`;

export const TopLinkWrapper = styled.div`
	color: ${props => props.theme.textGrey};
	cursor: pointer;
	display: flex;
	font-size: ${props => props.theme.primaryFontSize};
	padding: ${props => props.theme.primaryPadding};
	position: relative;
	text-decoration: none;
	:hover {
		transform: scale(1.1);
		transition: transform 0.2s;
	}
`;

export const CountProductsInBox = styled.div`
	background: ${props => props.theme.modalTransparentGrey};
	border: 1px solid ${props => props.theme.modalTransparentGrey};
	border-radius: 100%;
	color: ${props => props.theme.primaryWhite};
	display: flex;
	font-size: ${props => props.theme.primaryFontSize};
	height: 20px;
	justify-content: center;
	width: 20px;
`;
export const CountProductsInBoxText = styled.a``;
