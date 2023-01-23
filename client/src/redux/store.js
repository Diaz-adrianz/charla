import { configureStore } from '@reduxjs/toolkit';
import { ChatSlice, userSlice } from './reducer';

export const store = configureStore({
	reducer: {
		chat: ChatSlice.reducer,
		user: userSlice.reducer,
	},
});
