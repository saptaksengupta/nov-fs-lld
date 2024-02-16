import { createSlice } from "@reduxjs/toolkit";

const UserSlice =  createSlice({
    name: "userSlice",
    initialState: {
        user: null,
        isLoading: true,
        error: false
    },
    reducers: {
        showUserLoading: (state) => {
            state.isLoading = true;
            state.error = false;
        },

        showUserError: (state) => {
            state.error = true;
            state.isLoading = false;
        }, 

        setUserData: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        }
    }
});

export default UserSlice;
