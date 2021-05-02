import {
	ADD_TO_BOX,
	INCREASE_PRODUCT_AMOUNT,
	REMOVE_FROM_BOX,
	DECREASE_PRODUCT_AMOUNT,
	COUNT_FINAL_PRICE,
} from '../../constants/actionTypes';

export const addToBox = (product) => ({
	type: ADD_TO_BOX,
	product,
});

export const removeProduct = (product) => ({
	type: REMOVE_FROM_BOX,
	product,
});

export const increaseAmount = (product) => ({
	type: INCREASE_PRODUCT_AMOUNT,
	product,
});

export const decreaseAmount = (product) => ({
	type: DECREASE_PRODUCT_AMOUNT,
	product,
});

export const countFinalPrice = () => ({
	type: COUNT_FINAL_PRICE,
});
