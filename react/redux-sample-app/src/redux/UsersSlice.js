import { createSlice } from "@reduxjs/toolkit";

const UsersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: null,
        isLoading: true,
        error: false
    },
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
            state.error = false;
        },

        showError: (state) => {
            state.error = true;
            state.isLoading = false;
        },

        setUsers: (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        }
    
    }
});

export default UsersSlice;