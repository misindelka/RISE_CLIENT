import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../../types/types';
import { LinkTo } from '../../../styles/components';
import { NavContainer, Row } from '../../styles/modulesComponents';

const FormContainer = styled.div`
	align-items: center;
	justify-content: center;
`;

const FormWrapper = styled.form`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

const FieldContainer = styled.div`
	padding: ${(props) => props.theme.secondaryPadding};
`;

const Field = styled.input`
	background: ${(props) => props.theme.cardTransparencyGrey};
	height: ${(props) => props.theme.primaryInputHeight};
	width: ${(props) => props.theme.primaryInputField};
`;

const OrderButton = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.primaryWhite};
	cursor: pointer;
	font-size: ${(props) => props.theme.primaryFontSize};
	height: ${(props) => props.theme.primaryInputHeight};
	justify-content: center;
	margin-top: ${(props) => props.theme.primaryInputHeight};
	width: ${(props) => props.theme.primaryInputField};
	:hover {
		cursor: pointer;
		font-weight: bold;
		opacity: 1.5;
		transform: scale(1.1);
		transition: transform 0.3s;
	}
`;
interface IProps {
	submitUser: (user: IUser) => void;
}

const initialUserValue = {
	name: '',
	surname: '',
	street: '',
	stNumber: '',
	city: '',
	zipCode: '',
	email: '',
	phoneNumber: '',
};

const OrderFrom: React.FC<IProps> = ({ submitUser }: IProps) => {
	const [user, setUser] = useState(initialUserValue);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	};

	const { t } = useTranslation();

	const orderConfig = [
		{
			label: `${t('orderFormName')}`,
			fieldName: 'name',
		},
		{
			label: `${t('orderFormSurname')}`,
			fieldName: 'surname',
		},
		{
			label: `${t('orderFormStreetName')}`,
			fieldName: 'street',
		},
		{
			label: `${t('orderFormStreetNumber')}`,
			fieldName: 'stNumber',
		},
		{
			label: `${t('orderFormCityName')}`,
			fieldName: 'city',
		},
		{
			label: `${t('orderFormZipCode')}`,
			fieldName: 'zipCode',
		},
		{
			label: `${t('orderFormUserMail')}`,
			fieldName: 'email',
		},
		{
			label: `${t('orderFormUserNumber')}`,
			fieldName: 'phoneNumber',
		},
	];

	return (
		<FormContainer>
			<Row>
				<h2>{t('orderFormLabel')}</h2>
			</Row>

			<FormWrapper
				onSubmit={(event) => {
					event.preventDefault();
					submitUser(user);
					setUser(initialUserValue);
				}}>
				{orderConfig.map((column, i) => (
					<FieldContainer key={i}>
						<h4>{column.label}</h4>
						<Field
							type='text'
							name={column.fieldName}
							value={user[column.fieldName]}
							onChange={handleInputChange}
						/>
					</FieldContainer>
				))}

				<NavContainer>
					<LinkTo to='/Box'>
						<h4>{t('boxBackToShoppingButton')}</h4>
					</LinkTo>
					<LinkTo to='/Summary'>
						<h4>{t('boxSummaryButton')}</h4>
					</LinkTo>
					<OrderButton>
						<h4>{t('orderSubmitButton')}</h4>
					</OrderButton>
				</NavContainer>
			</FormWrapper>
		</FormContainer>
	);
};

export default OrderFrom;
