// user
// chat
// notification

import { createSlice } from '@reduxjs/toolkit';

export const ChatSlice = createSlice({
	name: 'chat',
	initialState: { active: false },
	reducers: {
		setActive: (state, action) => {
			state.active = action.payload;
		},
		deActive: (state) => {
			state.active = false;
		},
	},
});

export const userSlice = createSlice({
	name: 'user',
	initialState: { id: false },
	reducers: {
		setUser: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export const { setActive, deActive } = ChatSlice.actions;
