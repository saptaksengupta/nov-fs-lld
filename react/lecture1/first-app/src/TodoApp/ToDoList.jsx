const TodoList = ({todoList}) => {
    return (
        <div>
            {
                todoList && todoList.map((todo, index) => {
                    return (
                        <li key={index}>{todo}</li>
                    )
                })
            }
        </div>
    );
}

export default TodoList;