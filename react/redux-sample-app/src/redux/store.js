import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import todoSlice from "./TodoSlice";
import UserSlice from "./UserSlice";
import UsersSlice from "./UsersSlice";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        todoSlice: todoSlice.reducer,
        usersSlice: UsersSlice.reducer,
        userSlice: UserSlice.reducer
    }
});

export default store;