import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import IlessonsState from "../../types/IlessonsState";
import ILesson from "../../types/ILesson";

export const fetchArticles = createAsyncThunk<ILesson[]>('articles/fetchArticles', async (_, { rejectWithValue }) => {
   try {
      const response = await axios.get<ILesson[]>('http://localhost:8000/all-lessons');
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Ошибка запроса');
   }
});

const initialState: IlessonsState = {
   items: [],
   status: 'idle', // idle | loading | succeeded | failed
   error: null,
}

const lessonsSlice = createSlice({
   name: 'lessons',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchArticles.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<ILesson[]>) => {
            state.status = 'succeeded';
            state.items = action.payload;
         })
         .addCase(fetchArticles.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || 'Помилка завантаження';
         });
   },
})

export default lessonsSlice.reducer