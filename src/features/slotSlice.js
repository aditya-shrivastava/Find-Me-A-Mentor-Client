import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	slots: [],
};

const slotSlice = createSlice({
	name: 'slots',
	initialState,
	reducers: {
		initializeSlots: (state, action) => {
			state.slots = action.payload;
		},
		addSlot: (state, action) => {
			state.slots = [...state.slots, action.payload];
		},
		deleteSlot: (state, action) => {
			state.slots = state.slots.filter(
				(slot) => slot._id !== action.payload
			);
		},
		bookSlot: (state, action) => {
			state.slots = [...state.slots, action.payload];
		},
		clearSlots: (state) => {
			state.slots = [];
		},
	},
});

export const { initializeSlots, addSlot, deleteSlot, bookSlot, clearSlots } =
	slotSlice.actions;

export const selectSlots = (state) => state.slots;

export default slotSlice.reducer;
