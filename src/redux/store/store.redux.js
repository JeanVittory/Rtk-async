import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/countReducer.features';
import textReducer from '../features/textReducer.feature';
import postReducer from '../features/postReducer.features';

export const store = configureStore({
	reducer: {
		countReducer,
		textReducer,
		postReducer,
	},
});
