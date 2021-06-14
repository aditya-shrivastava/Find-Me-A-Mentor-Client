import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	token: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action) => {
			const { user, token, expiration } = action.payload;

			const tokenExpiration =
				expiration ||
				new Date(
					new Date().getTime() + 1000 * 60 * 60 * 12
				).toISOString();

			state.user = user;
			state.token = token;

			localStorage.setItem(
				'userData',
				JSON.stringify({
					user,
					token,
					expiration: tokenExpiration,
				})
			);
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			localStorage.removeItem('userData');
		},
		update: (state, action) => {
			state.user = action.payload;
			const userData = JSON.parse(localStorage.getItem('userData'));
			localStorage.setItem(
				'userData',
				JSON.stringify({
					...userData,
					user: action.payload,
				})
			);
		},
	},
});

export const { login, logout, update } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
