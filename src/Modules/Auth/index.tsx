/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../Redux/Actions/authActions';
import AuthForm from './authForm';
import { PageWrapper } from '../../styles/components';

interface IProps {
	userData: {
		email: string;
		password: string;
		confirmPassword: string;
	};
	signUp: boolean;
	arePasswordsSame: boolean;
	handleInputChange: any;
	handleSubmit: any;
	handleSignUpButton: any;
	setSignUp: any;
}

const initialUserValue = {
	email: '',
	password: '',
	confirmPassword: '',
};

const Auth: React.FC<IProps> = () => {
	const [userData, setUserData] = useState(initialUserValue);
	const [signUp, setSignUp] = useState(false);
	const [arePasswordsSame, setArePasswordSame] = useState(true);

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (e) => {
		dispatch(signin(userData, history));
		e.preventDefault();
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSignUp = (e) => {
		if (userData.password === userData.confirmPassword) {
			dispatch(signup(userData, history));
			e.preventDefault();
		} else setArePasswordSame(false);
	};

	const handleSignUpButton = (e) => {
		if (!signUp) {
			setSignUp(true);
		}
		if (signUp) {
			handleSignUp(e);
		}
	};

	return (
		<PageWrapper>
			<AuthForm
				signUp={signUp}
				userData={userData}
				handleInputChange={handleInputChange}
				arePasswordsSame={arePasswordsSame}
				handleSubmit={handleSubmit}
				handleSignUpButton={handleSignUpButton}
				setSignUp={setSignUp}
			/>
		</PageWrapper>
	);
};

export default Auth;
