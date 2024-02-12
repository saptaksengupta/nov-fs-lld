import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import todoSlice from "./TodoSlice";

const store = configureStore({
    reducer: {
        counterSlice: counterSlice.reducer,
        todoSlice: todoSlice.reducer
    }
});

export default store;