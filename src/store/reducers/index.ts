import { createReducer, createSlice } from '@reduxjs/toolkit';
import { onTitleClick } from '../actions/title';
import { title } from '../actions/types';

const initialState = {};
export const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(onTitleClick, (state, action) => {
    return {
      ...state,
      title: action.payload,
    };
  });
});

export const rootSlice = createSlice({
  name: title,
  initialState,
  reducers: {
    onClick: (state) => {
      console.log(state);
      console.log('hello title');
      return {
        user: {},
      };
    },
  },
});
