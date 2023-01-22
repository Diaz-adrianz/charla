import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/bootstrap.css';
import './styles/custom.css';
import './styles/bootstrap.bundle';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);

