import React from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { IProductTypes } from '../../../Types/types';
import { Paper, RowWrapper } from '../../../styles/components';

const DetailCard = styled.div`
	position: absolute;
`;
interface IProps {
	product: IProductTypes;
	setShowDetail: (params: boolean) => void;
}

const ProductDetail: React.FC<IProps> = ({
	setShowDetail,
	product,
}: IProps) => (
	<DetailCard>
		<Paper style={{ maxHeight: '300px', overflow: 'scroll' }}>
			<RowWrapper>
				<h2>{product.name}</h2>
				<IoCloseSharp size={35} onClick={() => setShowDetail(false)} />
			</RowWrapper>

			<p>{product.more}</p>
		</Paper>
	</DetailCard>
);

export default ProductDetail;
