import { combineReducers } from 'redux';
import BoxReducer from './Reducers/boxReducer';
import ProductsReducer from './Reducers/productsReducer';
import AuthReducer from './Reducers/authReducer';
import UsersReducer from './Reducers/usersReducer';

const rootReducer = combineReducers({
	products: ProductsReducer,
	productsInBox: BoxReducer,
	user: AuthReducer,
	usersData: UsersReducer,
});

export default rootReducer;
