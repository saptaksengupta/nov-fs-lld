import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import todoSlice from '../redux/TodoSlice';

export default function TodoComponent() {
    const actions = todoSlice.actions;
    const { value, todoList } = useSelector(store => store.todoSlice);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const textVal = e.target.value;
        // dispatch an action to store value 
        if (textVal) {
            dispatch(actions.setValue(textVal));
        }
    }

    const onAddTodo = (e) => {
        // dispatch action to add todo
        dispatch(actions.addTask(value));
        dispatch(actions.setValue(""));
    }

    return (
        <>
            <div>
                <div style={{ paddingTop: '1em' }} className='inputBox'>
                    <input onInput={e => handleChange(e)} value={value} />
                    <button onClick={(e) => onAddTodo()} > Add Todo </button>
                </div>
                <div className='list' >
                    <ul>
                        {/* TODO: read todo from current state */}
                        {
                            todoList.map((todo, index) => <li key={index}>{todo}</li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}
