import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import slotReducer from '../features/slotSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		slots: slotReducer,
	},
});
