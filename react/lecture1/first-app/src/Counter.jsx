import { useState } from "react";

const Counter = ({initialCount}) => {
    const [counter, setCounter] = useState(initialCount); 

    const onInc  = () => {
        setCounter(prev => {
            return prev + 1;
        });
    }

    const onDec = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h3>Counter </h3>
            <button onClick={onDec}>-</button>
            <span style={{display: 'inline-block', width: '100px'}}>{counter}</span>
            <button onClick={onInc}>+</button>
        </div>
    )
}

export default Counter;