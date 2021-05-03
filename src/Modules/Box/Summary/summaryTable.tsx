/* eslint-disable no-nested-ternary */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IProductTypes } from '../../../Types/types';

import { Row, Column, ProductImage } from '../styles/boxComponents';

interface IProps {
	productsInBox: IProductTypes;
	finalPrice: number;
}

const SummaryTable: React.FC<IProps> = ({
	productsInBox,
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
				<h3>{t('boxOrderSummaryLabel')}</h3>
			</Row>

			<Row>
				<Column />
				{columns.map((column, i) => (
					<Column key={i}>
						<h3>{column.label}</h3>
					</Column>
				))}
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
				</Row>
			))}
			<Row>
				<h3>
					{t('boxTableFinalPrice')} : {finalPrice.toFixed(2)} eur
				</h3>
			</Row>
		</>
	);
};
export default SummaryTable;
