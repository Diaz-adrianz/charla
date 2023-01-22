import { Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/user';
import ChatsPage from './pages/chats';
import ConnectionsPage from './pages/connections';

function App() {
	return (
		<Routes>
			<Route path="/" element={<UserLayout />}>
				<Route index element={<ChatsPage />} />
				<Route path="/connections" element={<ConnectionsPage />} />
			</Route>
		</Routes>
	);
}

export default App;

