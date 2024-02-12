import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../redux/CounterSlice';

export default function Counter() {

    const {actions} = counterSlice;

    const counterState = useSelector((store) => store.counterSlice);
    const dispatch = useDispatch();

    const handleInc = () => {
        // dispatch inc action
        dispatch(actions.increment());
    }

    const handleDec = () => {
        // dispatch dec action
        dispatch(actions.decrement());
    }

    return (
        <div>
            <div onClick={handleDec}>-</div>
            <h3>{counterState.count}</h3>
            <div onClick={handleInc} >+</div>
        </div>
    )
}
