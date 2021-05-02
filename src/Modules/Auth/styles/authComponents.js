import styled from 'styled-components';

export const FormContainer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: ${props => props.theme.secondaryPadding};
`;

export const FieldContainer = styled.div`
	padding: ${props => props.theme.secondaryPadding};
`;
export const RowWrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const Field = styled.input`
	background: ${props => props.theme.cardTransparencyGrey};
	height: ${props => props.theme.primaryInputHeight};
	margin: ${props => props.theme.secondaryPadding};
	width: ${props => props.theme.primaryInputField};
`;

export const ConfirmButton = styled.button`
	background: none;
	border: none;
	color: ${props => props.theme.primaryWhite};
	cursor: pointer;
	font-size: ${props => props.theme.primaryFontSize};
	height: ${props => props.theme.primaryInputHeight};
	justify-content: center;
	margin: ${props => props.theme.secondaryPadding};
	width: ${props => props.theme.primaryInputField};
	:hover {
		cursor: pointer;
		font-weight: bold;
		opacity: 1.5;
		transform: scale(1.1);
		transition: transform 0.3s;
	}
`;
