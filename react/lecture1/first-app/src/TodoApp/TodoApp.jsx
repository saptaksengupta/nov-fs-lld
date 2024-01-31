import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./ToDoList";

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const onTodoAdded = (todo) => {
        // update the state 
        setTodoList([...todoList, todo]);
    }

    return (
        <div style={{padding: '1em'}}>
            <AddTodoForm cb={onTodoAdded} />
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoApp;