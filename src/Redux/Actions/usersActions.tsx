import axios from 'axios';
import { ADD_USER } from '../../constants/actionTypes';

export const addUser = (user) => async (dispatch) => {
	try {
		await axios.post('http://localhost:4000/rise/users', user);
		console.log('usersActions dsip', user);
		dispatch({ type: ADD_USER, user });
	} catch (error) {
		alert('usersActions failed');
	}
};
