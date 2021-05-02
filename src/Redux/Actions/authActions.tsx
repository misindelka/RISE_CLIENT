import { AUTH } from '../../constants/actionTypes';
import * as api from '../../api/auth';

export const signin = (userData, history) => async (dispatch) => {
	try {
		const { data } = await api.signIn(userData);

		dispatch({ type: AUTH, data });

		history.push('/');
	} catch (error) {
		alert('spatne meno nebo heslo');
	}
};

export const signup = (userData, history) => async (dispatch) => {
	try {
		const { data } = await api.signUp(userData);
		alert('auth action signup');

		dispatch({ type: AUTH, data });

		history.push('/');
	} catch (error) {
		console.log(' error signup authActions', userData);
	}
};
