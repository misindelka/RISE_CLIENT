/* eslint-disable consistent-return */
import { ADD_USER } from '../../constants/actionTypes';
import { IUser } from '../../types/types';

const initialStateValue = {
	users: [],
};

interface IState {
	users: IUser[];
}

const UsersReducer = (state: IState = initialStateValue, action) => {
	switch (action.type) {
		case ADD_USER:
			{
				const compareUser = state.users.some(
					(user) => user.name === action.user.name
				);
				if (!compareUser) {
					return {
						...state,
						users: [...state.users, action.user],
					};
				}
				console.log('user is registered');
			}
			break;
		default:
			return state;
	}
};

export default UsersReducer;
