import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import request from '../../request';

interface NewsState {
    newsList: any[]
}

const initialState: NewsState = {
    newsList: []
}

// Async function for get news from api
export const fetchNewsList = createAsyncThunk(
    'news/fetchHackerNewsList',
    async() => {
        const res = await request.get('/news/getAllWeeklyNews');
        return res.data;
    }
);

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<any>) => {
            state.newsList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsList.fulfilled, (state, action) => {
                state.newsList = action.payload;
            });
    },
});

export const { update } = newsSlice.actions
export default newsSlice.reducer