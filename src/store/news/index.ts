import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import request from '../../request';

interface NewsState {
    // hackerList: any[],
    // overflowList: any[],
    // infoQList: any[],
    newsList: any[],
}

const initialState: NewsState = {
    // hackerList: [],
    // overflowList: [],
    // infoQList: [],
    newsList: [],
}

// Async function for get news from api
export const fetchNewsList = createAsyncThunk(
    'news/fetchHackerNewsList',
    async() => {
        // const hackerList = await request.get('/news/getWeeklyNews', {params: {'type': 'HACKERWEEKLYNEWS'}});
        // const overflowList = await request.get('/news/getWeeklyNews', {params: {'type': 'OVERFLOWWEEKLYNEWS'}});
        // const infoQList = await request.get('/news/getWeeklyNews', {params: {'type': 'INFOQWEEEKLYNEWS'}});
        // return [hackerList.data, overflowList.data, infoQList.data]
        const res = await request.get('/news/getAllWeeklyNews');
        console.log(res)
        return res.data;
    }
);

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<any[]>) => {
            // state.hackerList = action.payload[0];
            // state.overflowList = action.payload[1];
            // state.infoQList = action.payload[2];
            state.newsList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewsList.fulfilled, (state, action) => {
                // state.hackerList = action.payload[0];
                // state.overflowList = action.payload[1];
                // state.infoQList = action.payload[2];
                state.newsList = action.payload;
            });
    },
});


// export const selectHackerNewsList = (state: RootState) => state.hacker.list;
export const { update } = newsSlice.actions
export default newsSlice.reducer