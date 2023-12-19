import React, {useState} from 'react';
import './data-flow-child.css';

function ParentComponent() {

    const[count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count + 1);
    };

    return (
        <div class="parent">
            <h1>Counter App</h1>
            <p>Count:{count}</p>
            <ChildComponent count={count} onCount={increment}/>
        </div>
    )
    
}

function ChildComponent(props) {

    return(
        <div class="buttons">
            <p>Child Component: Count - {props.count}</p>
            <button onClick={props.onCount}>Increment</button>
        </div>
    )

}

export default ParentComponent