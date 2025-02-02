import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IAuthState from "../../types/IAuthState";
import IUser, { ILectureCompleted } from "../../types/IUser";
import axios from "axios";
import ILectureToggleComleted from "../../types/ILectureToggleComleted";

export const toggleCompleted = createAsyncThunk<ILectureCompleted[], ILectureToggleComleted>(
   'user/toggleCompleted',
   async (lessonToAdd, { rejectWithValue }) => {
      try {
         const response = await axios.post<ILectureCompleted[]>(
            'http://localhost:8000/toggle-completed',
            lessonToAdd
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response?.data?.message || 'Ошибка запроса');
      }
   }
);

const initialState: IAuthState = {
   isAuth: false,
   user: null,
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      login: (state, action: PayloadAction<IUser>) => {
         state.isAuth = true;
         state.user = action.payload; // Устанавливаем данные пользователя
      },
      logout: (state) => {
         state.isAuth = false;
         state.user = null; // Сбрасываем данные пользователя
      },
      updateTimeSpend: (state, action: PayloadAction<number>) => {
         if (state.user) {
            state.user.totalTimeSpent += action.payload
         }
      }
   },
   extraReducers(builder) {
      builder
         .addCase(toggleCompleted.fulfilled, (state, action: PayloadAction<ILectureCompleted[]>) => {
            if (state.user) {
               state.user.lecturesCompleted.lessons = action.payload
            }
         })
   },
})

export const { login, logout, updateTimeSpend } = authSlice.actions
export default authSlice.reducer