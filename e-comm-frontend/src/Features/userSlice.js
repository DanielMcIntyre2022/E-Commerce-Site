import createSlice from '@reduxjs/toolkit';
import appApi from '../Services/appApi';

const initialState = [];

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const { logout, addNotification, resetNotification } = userSlice.actions;

export default userSlice.reducer;