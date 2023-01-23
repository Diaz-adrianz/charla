import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/bootstrap.css';
import './styles/custom.css';
import './styles/bootstrap.bundle';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<GoogleOAuthProvider clientId="535027197498-qkufa838b5dem3e1r3adgmhij2a60fif.apps.googleusercontent.com">
					<App />
				</GoogleOAuthProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

