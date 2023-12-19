import React, {useState} from 'react';
import './data-flow-parent.css';

function ParentComponent() {

    const[message, setMessage] = useState("From Parent");

    const updateMessage = () => {
        setMessage("");
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div class="parent">
            <h1>Data Flow Parent-Child Callback</h1>
            <input type="text" onChange={handleInputChange} value={message}/>
            <button onClick={updateMessage}>Clear Textbox</button>
            <ChildComponent message={message}/>
        </div>
    )
    
}

function ChildComponent(props) {

    return(
        <div class="child">
             <h2>Child Component</h2>
            <p>Message from Parent: {props.message}</p>
        </div>
    )

}

export default ParentComponent