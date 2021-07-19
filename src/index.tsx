import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import './i18n';
import * as theme from './styles/theme';
import Main from './main';
import store from './Redux/store';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Suspense fallback='...Loading'>
					<Main />
				</Suspense>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);





