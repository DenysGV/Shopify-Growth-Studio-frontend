import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import lessonsReducer from "./Lessons/lessonsSlice"

const rootReducer = combineReducers({
   auth: authReducer,
   lessons: lessonsReducer
})

export default rootReducer