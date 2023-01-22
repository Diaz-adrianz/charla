import { configureStore } from '@reduxjs/toolkit';
import { ChatSlice } from './reducer';

export const store = configureStore({
	reducer: {
		chat: ChatSlice.reducer,
	},
});
