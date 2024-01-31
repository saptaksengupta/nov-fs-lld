const AddTodoForm = ({cb}) => {
    
    const onAddTodo = () => {
        const todoInput = document.getElementById("todo-input");
        const todo = todoInput.value;
        // inform parent that i got a value...
        if (cb && todo) {
            cb(todo); 
            todoInput.value = "";
        }
    }

    return (
        <div>
            <input type="text" id="todo-input"></input>
            <button onClick={onAddTodo} >Add</button>
        </div>
    )
}

export default AddTodoForm;