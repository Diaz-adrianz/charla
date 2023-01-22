import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/bootstrap.css';
import './styles/custom.css';
import './styles/bootstrap.bundle';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

