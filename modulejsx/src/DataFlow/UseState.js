import React, {useState} from 'react';
import './use-state.css';

function Counter() {

    const[count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1);
    }

    const decrement = ()=> {
        setCount(count - 1);
    }

    return (
        <div class="parent">
            <h1>Counter</h1>
            <p>Count:{count}</p>
            <div class="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter