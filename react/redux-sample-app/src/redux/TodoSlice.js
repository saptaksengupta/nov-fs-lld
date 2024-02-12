import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoSlice",
    initialState: {
        value: "",
        todoList: ["First task"]
    },

    reducers: {
        setValue: (state, action) => {
            state.value = action.payload;
        },
        
        addTask: (state, action) => {
            const task = action.payload;
            state.todoList = [...state.todoList, task];
        }
    }
});

export default todoSlice