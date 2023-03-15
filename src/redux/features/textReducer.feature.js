import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: 'ingresa tu nombre',
};

export const textSlice = createSlice({
	name: 'text',
	initialState,
	reducers: {
		changeText: (state, action) => {
			state.username = action.payload;
		},
	},
});

export const { changeText } = textSlice.actions;
export default textSlice.reducer;
