/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable default-case */
/* eslint-disable no-confusing-arrow */

import {
	ADD_TO_BOX,
	REMOVE_FROM_BOX,
	INCREASE_PRODUCT_AMOUNT,
	DECREASE_PRODUCT_AMOUNT,
	COUNT_FINAL_PRICE,
} from '../../constants/actionTypes';

interface IProductTypes {
	[x: string]: unknown;
	_id: number;
	name: string;
	slug: string;
	desc: string;
	category: string;
	new: boolean;
	amount: number;
	quantity: number;
	image: string;
	more: string;
	price: number;
	totalPrice: number;
}
interface productState {
	data: IProductTypes[];
	finalPrice: number[];
}

const initialStateValue = {
	data: [],
	finalPrice: [],
};

// eslint-disable-next-line consistent-return
const BoxReducer = (state: productState = initialStateValue, action) => {
	switch (action.type) {
		case ADD_TO_BOX:
			{
				const isProductInBox = state.data.some(
					(product) => product._id === action.product._id
				);
				const addProduct = {
					...action.product,
					totalPrice: action.product.price,
					amount: 1,
				};
				if (!isProductInBox) {
					return {
						...state,
						data: [...state.data, addProduct],
					};
				}
			}
			break;
		case REMOVE_FROM_BOX: {
			return {
				...state,
				data: state.data.filter(
					(product) => action.product._id !== product._id
				),
			};
		}
		case INCREASE_PRODUCT_AMOUNT: {
			return {
				...state,
				data: state.data.map((product) =>
					product._id === action.product._id
						? {
								...product,
								amount: product.amount + 1,
								totalPrice:
									product.price + action.product.price * action.product.amount,
						  }
						: product
				),
			};
		}
		case DECREASE_PRODUCT_AMOUNT: {
			return {
				...state,
				data: state.data.map((product) =>
					product._id === action.product._id
						? {
								...product,
								amount: product.amount <= 1 ? 1 : product.amount - 1,
								totalPrice:
									product.amount <= 1
										? product.price
										: // eslint-disable-next-line operator-linebreak
										  // eslint-disable-next-line operator-linebreak
										  action.product.price * action.product.amount -
										  product.price,
						  }
						: product
				),
			};
		}
		case COUNT_FINAL_PRICE: {
			return {
				...state,
				finalPrice: state.data.reduce<number>(
					(acc, product) => acc + product.totalPrice,
					0
				),
			};
		}
	}
	return state;
};

export default BoxReducer;
