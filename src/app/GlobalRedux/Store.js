"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from './Features/counter/counterSlice';
import pageDetailsReducer from './Features/pageDetails/pageDetailsSlice';



const rootReducer = combineReducers({
  counter: counterReducer,
  pageDetails: pageDetailsReducer,
},);

export const store = configureStore({
  reducer: rootReducer,

});