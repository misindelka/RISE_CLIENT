import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useGoogleLogin } from 'react-google-login';
import { useTranslation } from 'react-i18next';
import { ConfirmButton } from './styles/authComponents';
import { clientId } from '../../api/googleApis';

const GoogleSignIn = () => {
	const [failure, setFailure] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const { t } = useTranslation();

	const onSuccess = async (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;

		try {
			dispatch({ type: 'AUTH', data: { result, token } });
			history.push('/About');
		} catch (error) {
			console.log(error);
		}
	};

	const onFailure = () => {
		setFailure(!failure);
	};
	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
	});

	return (
		<ConfirmButton onClick={signIn}>
			<h4>{t('authWithGoogle')}</h4>
		</ConfirmButton>
	);
};

export default GoogleSignIn;
