import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Animate, { Flash, FadeOut, FadeIn } from 'animate-css-styled-components';
import Tippy from '@tippy.js/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css';
import ProductDetail from './productDetail';
import { IProductTypes, TAddToBox } from '../../../types/types';
import { addToBoxButton, productIsInBox } from '../../../tippy/labels';

const iconUrl = `${process.env.PUBLIC_URL}/assets/box.png`;

const CardWrapper = styled.div`
	background: ${(props) => props.theme.cardTransparencyGrey};
	border-radius: 4px;
	box-shadow: 1px 3px 3px 2px #bdbdbd;
	display: flex;
	flex-direction: column;
	height: ${(props) => props.theme.mediumCardSize};
	margin: ${(props) => props.theme.secondaryPadding};
	padding: ${(props) => props.theme.secondaryPadding};
	width: ${(props) => props.theme.mediumCardSize};
	:hover {
		cursor: pointer;
		opacity: 1.3;
		transform: scale(1.05);
		transition: transform 0.3s;
	}
`;

const ProductImage = styled.img`
	border-radius: 4px;
	height: 150px;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	font-size: ${(props) => props.theme.secondaryFontSize};
	font-weight: bold;
	justify-content: center;
	padding: ${(props) => props.theme.smallPadding};
`;
const Desc = styled.div`
	display: flex;
	flex-direction: row;
	font-size: ${(props) => props.theme.primaryFontSize};
	justify-content: center;
	padding: ${(props) => props.theme.smallPadding};
`;
const BottomWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const ShowDetail = styled.div`
	display: flex;
	font-size: ${(props) => props.theme.smallFontSize};
	font-weight: bold;
	justify-content: center;
	max-width: ${(props) => props.theme.primaryImgSize};
	padding: ${(props) => props.theme.smallPadding};
	:hover {
		cursor: pointer;
		opacity: 1.3;
		transform: scale(1.3);
		transition: transform 0.3s;
	}
`;

const BoxIcon = styled.img`
	height: 40px;
	padding: ${(props) => props.theme.smallPadding};
	:hover {
		cursor: pointer;
		opacity: 1.3;
		transform: scale(1.3);
		transition: transform 0.3s;
	}
	width: 50px;
`;
interface IProps {
	product: IProductTypes;
	addProductToBox: TAddToBox;
}

const ProductCard: React.FC<IProps> = ({
	product,
	addProductToBox,
}: IProps) => {
	// eslint-disable-next-line no-unused-vars
	const [animateAdd, setAnimateAdd] = useState(false);
	const [showDetail, setShowDetail] = useState<boolean>(false);
	const { t } = useTranslation();

	const handleAddButton = () => {
		addProductToBox(product);
		setAnimateAdd(true);
	};

	return (
		<>
			<CardWrapper>
				<ProductImage src={`${process.env.PUBLIC_URL + product.image}`} />
				<ContentContainer>
					<Title>{product.name}</Title>
					<Desc>{product.desc}</Desc>
					<BottomWrapper>
						<ShowDetail onClick={() => setShowDetail(!showDetail)}>
							{t('productCardProductDetail')}
						</ShowDetail>
						{product.price.toFixed(2)} {t('priceEur')}
						<>
							{!animateAdd ? (
								<Tippy content={addToBoxButton}>
									<BoxIcon onClick={handleAddButton} src={iconUrl} />
								</Tippy>
							) : (
								<Animate
									Animation={[Flash, FadeOut, FadeIn]}
									duration={['0.8s', '3s', '2s', '0.4s']}
									delay={['0.2s', '0.1s', '0.5s', '1s']}>
									<Tippy content={productIsInBox}>
										<BoxIcon src={iconUrl} />
									</Tippy>
								</Animate>
							)}
						</>
					</BottomWrapper>
				</ContentContainer>
			</CardWrapper>

			{showDetail === true && (
				<ProductDetail product={product} setShowDetail={setShowDetail} />
			)}
		</>
	);
};

export default ProductCard;
