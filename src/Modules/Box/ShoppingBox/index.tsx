/* eslint-disable no-nested-ternary */
import React from 'react';
import { IoAddSharp, IoRemoveSharp, IoClose } from 'react-icons/io5';
import Tippy from '@tippy.js/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'tippy.js/dist/tippy.css';
import { useTranslation } from 'react-i18next';
import { HowerWrapper } from '../../../styles/components';
import { IProductTypes } from '../../../Types/types';
import { Column, Row, ProductImage } from '../styles/boxComponents';
import {
	boxLessOfProduct,
	boxMoreOfProduct,
	boxRemoveProduct,
} from '../../../tippy/labels';

interface IProps {
	productsInBox: IProductTypes;
	finalPrice: number;
	remove: (p: IProductTypes) => void;
	increase: (p: IProductTypes) => void;
	decrease: (p: IProductTypes) => void;
}

const ShoppingBox: React.FC<IProps> = ({
	productsInBox,
	remove,
	decrease,
	increase,
	finalPrice,
}: IProps) => {
	const { t } = useTranslation();

	const columns = [
		{
			label: `${t('boxTableProductName')}`,
			fieldName: 'name',
		},
		{
			label: `${t('boxTableProductCategory')}`,
			fieldName: 'category',
		},
		{
			label: `${t('boxTableProductPrice')}`,
			fieldName: 'price',
		},
		{
			label: `${t('boxTableTotaLProductPrice')}`,
			fieldName: 'totalPrice',
		},
		{
			label: `${t('boxTableTotalProductAmount')}`,
			fieldName: 'amount',
		},
	];

	return (
		<>
			<Row>
				<h3>{t('boxLabel')}</h3>
			</Row>

			<Row>
				<Column />
				{columns.map((column, i) => (
					<Column key={i}>
						<h3>{column.label}</h3>
					</Column>
				))}
				<Column />
				<Column />
			</Row>

			{productsInBox.map((product, i) => (
				<Row key={i}>
					<Column>
						<ProductImage src={`${process.env.PUBLIC_URL + product.image}`} />
					</Column>

					{columns.map((column, index) => (
						<Column key={index}>
							{column.fieldName === 'totalPrice' ? (
								<p>{product[column.fieldName].toFixed(2)}</p>
							) : column.fieldName === 'price' ? (
								<p>{product[column.fieldName].toFixed(2)}</p>
							) : (
								<p>{product[column.fieldName]}</p>
							)}
						</Column>
					))}
					<Column>
						<Tippy content={boxMoreOfProduct}>
							<HowerWrapper>
								<IoAddSharp size={25} onClick={() => increase(product)} />
							</HowerWrapper>
						</Tippy>
						<Tippy content={boxLessOfProduct}>
							<HowerWrapper>
								<IoRemoveSharp size={25} onClick={() => decrease(product)} />
							</HowerWrapper>
						</Tippy>
						<Column>
							<Tippy content={boxRemoveProduct}>
								<HowerWrapper>
									<IoClose size={25} onClick={() => remove} />
								</HowerWrapper>
							</Tippy>
						</Column>
					</Column>
				</Row>
			))}
			<Row>
				{finalPrice > 0 && (
					<h3>
						{t('boxTableFinalPrice')}: {finalPrice.toFixed(2)} eur
					</h3>
				)}
			</Row>
		</>
	);
};
export default ShoppingBox;
