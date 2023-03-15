import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
	posts: [],
	error: null,
	loading: false,
};

export const postReducer = createSlice({
	name: 'Posts',
	initialState,
	reducers: {
		postSuccess: (state, action) => {
			state.posts = [...state.posts, action.payload];
		},
		postLoading: (state, action) => {
			state.loading = action.payload;
		},
		postError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const getPosts = () => {
	return (dispatch) => {
		dispatch(postLoading(true));
		axios
			.get(URL)
			.then((res) => {
				dispatch(postSuccess(res.data));
			})
			.catch((error) => {
				dispatch(postError(error.message));
			})
			.finally(() => {
				dispatch(postLoading(false));
			});
	};
};

export const { postSuccess, postLoading, postError } = postReducer.actions;
export default postReducer.reducer;
