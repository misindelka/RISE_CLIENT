import axios from 'axios';
import { GET_PRODUCTS } from '../../constants/actionTypes';
import { productsApi } from '../../api/index';

export const getProducts = () => async (dispatch) => {
	await axios.get(productsApi).then((res) => {
		dispatch({ type: GET_PRODUCTS, payload: res.data });
	});
};
