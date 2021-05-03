/* eslint-disable import/namespace */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
	removeProduct,
	increaseAmount,
	decreaseAmount,
	countFinalPrice,
} from '../../Redux/Actions/boxActions';
import { IProductTypes } from '../../Types/types';
import BoxBar from './boxBar';
import BoxIsEmpty from './BoxIsEmpty/index';
import ShoppingBox from './ShoppingBox/index';
import ShopLink from '../../LinkComponents/shopLink';
import { Paper, ContentWrapper, LinkTo } from '../../styles/components';
import { NavContainer, ShopWrapper } from '../styles/modulesComponents';
import { ShopNavContainer } from './styles/boxComponents';

interface IProps {
	removeProductFromBox: (p: IProductTypes) => void;
	increase: (p: IProductTypes) => void;
	decrease: (p: IProductTypes) => void;
}

const Box: React.FC<IProps> = () => {
	const dispatch = useDispatch();
	const productsInBox = useSelector((state: any) => state.productsInBox.data);
	const finalPrice = useSelector(
		(state: any) => state.productsInBox.finalPrice
	);

	const { t } = useTranslation();

	useEffect(() => {
		dispatch(countFinalPrice());
	});

	const remove = (p) => {
		dispatch(removeProduct(p));
	};

	const increase = (p) => {
		dispatch(increaseAmount(p));
	};

	const decrease = (p) => {
		dispatch(decreaseAmount(p));
	};
	return (
		<ShopWrapper>
			{productsInBox.length ? (
				<>
					<BoxBar />
					<ContentWrapper>
						<Paper>
							<ShoppingBox
								remove={remove}
								increase={increase}
								decrease={decrease}
								productsInBox={productsInBox}
								finalPrice={finalPrice}
							/>
							<NavContainer>
								<ShopNavContainer>
									<ShopLink />
									<h4>{t('boxBackToShoppingButton')}</h4>
								</ShopNavContainer>
								<LinkTo to='/Summary'>
									<div>
										<h4>{t('boxSummaryButton')}</h4>
									</div>
								</LinkTo>
							</NavContainer>
						</Paper>
					</ContentWrapper>
				</>
			) : (
				<BoxIsEmpty />
			)}
		</ShopWrapper>
	);
};

export default Box;
