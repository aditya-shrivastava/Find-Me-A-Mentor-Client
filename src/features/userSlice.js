import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
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
			localStorage.removeItem('userData');
		},
		// update: (state, action) => {

		// }
	},
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
