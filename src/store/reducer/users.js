/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isAuth: false,
    user: null,
  },
  reducers: {
    doLogin: (state, { payload }) => {
      state.isAuth = true;
      state.user = payload;
    },
    doLogout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
    refreshUser: (state, { payload }) => {
      state.user = { ...payload, token: state.user.token };
    },
  },
});

export const { doLogin, doLogout, refreshUser } = usersSlice.actions;

export default usersSlice.reducer;
