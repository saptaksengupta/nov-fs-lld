// pure function: For same input,
// it will return the same output.

import { useMemo } from "react";

const { useState } = require("react")


const MemoExample = () => {
    
    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(0);
        
    // const factRes = factorialOf(number);
    const factRes = useMemo(() => factorialOf(number), [number]) 

    const onChangeInput = (e) => {
        setNumber(Number(e.target.value));
    }

    const onBtnClick = () => {
        setValue(prev => prev + 1);
    }

    return (
        <div style={{padding: "15px"}}>
            <input type="number" min="0" onInput={onChangeInput} />
            <div>
                Factorial of {number} is {factRes}
            </div>

            <div>
                Some other value: {value}
            </div>

            <button onClick={onBtnClick}>Change Value</button>
        </div>
    )
}

function factorialOf(n) {
    console.log("This function is getting called for ", n);
    return n <= 1 ? 1 : n * factorialOf(n - 1);  
}

export default MemoExample;