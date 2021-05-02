/* eslint-disable default-case */
import { GET_PRODUCTS } from '../../constants/actionTypes';

const initialState = { data: [] };

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				data: action.payload,
			};
	}
	return state;
};
export default ProductsReducer;
