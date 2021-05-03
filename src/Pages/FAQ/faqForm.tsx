import React, { useState } from 'react';
import styled from 'styled-components';
import { IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5';
import { IFaq } from '../../Types/types';

const FaqCard = styled.div`
	background: ${(props) => props.theme.modalTransparentGrey};
	border-radius: 3px;
	box-shadow: 1px 1px 1px 1px
		${(props) => props.theme.modalTransparencySecondaryGrey};
	color: ${(props) => props.theme.primaryBoxShadow};
	display: flex;
	height: ${(props) => props.theme.faqCardSize};
	justify-content: space-between;
	margin: ${(props) => props.theme.primaryPadding};
	opacity: 0.9;
	overflow: scroll;
	padding: ${(props) => props.theme.primaryPadding};
	width: ${(props) => props.theme.bigCard};
	:hover {
		background: ${(props) => props.theme.modalTransparencySecondaryGrey};
		cursor: pointer;
		opacity: 1.6;
	}
`;

interface IProps {
	item: IFaq;
}

const FaqForm: React.FC<IProps> = ({ item }) => {
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<>
			<FaqCard>
				{item.question}
				<div>
					<IoChevronDownOutline
						size={30}
						onClick={() => setShowAnswer(!showAnswer)}
					/>
				</div>
			</FaqCard>

			{showAnswer === true ? (
				<FaqCard>
					{item.answer}
					<div>
						<IoChevronUpOutline
							size={30}
							onClick={() => setShowAnswer(!showAnswer)}
						/>
					</div>
				</FaqCard>
			) : null}
		</>
	);
};

export default FaqForm;
