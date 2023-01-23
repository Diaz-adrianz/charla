import { Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/user';
import Page404 from './pages/404';
import ChatsPage from './pages/chats';
import ConnectionsPage from './pages/connections';
import SignInPage from './pages/signin';

function App() {
	return (
		<Routes>
			<Route path="/" element={<UserLayout />}>
				<Route index element={<ChatsPage />} />
				<Route path="/connections" element={<ConnectionsPage />} />
			</Route>

			<Route path="/enter" element={<SignInPage />} />

			<Route path="*" element={<Page404 />} />
		</Routes>
	);
}

export default App;

