import React, {useState, useEffect} from 'react'
import QuestionMark from './QuestionMark';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useCounter from '../hooks/useCounter';
import useInput from '../hooks/useInput';
const examples = "Hooks - Custom hooks";

/* Custom Hooks - a javascript function whose name starts with "use" and can call other hooks if required

                  *Share logic - alternative to HOCs and Render props                  
*/

//! Normal title update
// function ExampleSet15() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = `Count ${count}`;
//     }, [count]);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={15}/>
//             <button onClick={() => setCount(count + 1)}>Count - {count}</button>
//             <DocTitleTwo/>
//         </div>
//     )
// }

// function DocTitleTwo(){
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = `Count ${count}`;
//     }, [count]);

//     return (
//         <div>            
//             <button onClick={() => setCount(count + 1)}>Count - {count}</button>
//         </div>
//     )
// }

//! useDocumentTitle hook
// function ExampleSet15() {
//     const [count, setCount] = useState(0);
//     useDocumentTitle(count);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={15}/>
//             <button onClick={() => setCount(count + 1)}>Count - {count}</button>
//             <DocTitleTwo/>
//         </div>
//     )
// }

// function DocTitleTwo(){
//     const [count, setCount] = useState(0);
//     useDocumentTitle(count);

//     return (
//         <div>            
//             <button onClick={() => setCount(count + 1)}>Count - {count}</button>
//         </div>
//     )
// }

//! Normal counter
// function ExampleSet15() {
//     const [count, setCount] = useState(0);    
//     const incrementCount = () => {
//         setCount(prevCount => prevCount + 1);
//     }
//     const decrementCount = () => {
//         setCount(prevCount => prevCount - 1);
//     }
//     const resetCount = () => {
//         setCount(0);
//     }

//     return (
//         <div>
//             <QuestionMark examples={examples} number={15}/>
//             <h2>Count = {count}</h2>
//             <button onClick={decrementCount}>Decrement</button>
//             <button onClick={incrementCount}>Increment</button>
//             <button onClick={resetCount}>Reset</button>     
//             <CounterTwo/>       
//         </div>
//     )
// }

// function CounterTwo(){
//     const [count, setCount] = useState(0);    
//     const incrementCount = () => {
//         setCount(prevCount => prevCount + 1);
//     }
//     const decrementCount = () => {
//         setCount(prevCount => prevCount - 1);
//     }
//     const resetCount = () => {
//         setCount(0);
//     }

//     return (
//         <div>            
//             <h2>Count = {count}</h2>
//             <button onClick={decrementCount}>Decrement</button>
//             <button onClick={incrementCount}>Increment</button>
//             <button onClick={resetCount}>Reset</button>            
//         </div>
//     )
// }

//! useCounter hook
// function ExampleSet15() {
//     const [count, incrementCount, decrementCount, resetCount] = useCounter(0, 1);
//     return (
//         <div>
//             <QuestionMark examples={examples} number={15}/>
//             <h2>Count = {count}</h2>
//             <button onClick={decrementCount}>Decrement</button>
//             <button onClick={incrementCount}>Increment</button>
//             <button onClick={resetCount}>Reset</button>     
//             <CounterTwo/>       
//         </div>
//     )
// }

// function CounterTwo(){
//     const [count, incrementCount, decrementCount, resetCount] = useCounter(10, 10);
//     return (
//         <div>            
//             <h2>Count = {count}</h2>
//             <button onClick={decrementCount}>Decrement</button>
//             <button onClick={incrementCount}>Increment</button>
//             <button onClick={resetCount}>Reset</button>            
//         </div>
//     )
// }

//! Normal input
// function ExampleSet15() {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setlastName] = useState('');

//     const submitHandler = e => {
//         e.preventDefault();
//         alert(`Hello ${firstName} ${lastName}`);
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <QuestionMark examples={examples} number={15}/>
//             <div>
//                 <label>First Name</label>
//                 <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
//             </div>     
//             <div>
//                 <label>Last Name</label>
//                 <input type="text" value={lastName} onChange={e => setlastName(e.target.value)} />
//             </div>   
//             <button type='submit'>Submit</button>  
//         </form>
//     )
// }

//! useInput hook
function ExampleSet15() {
    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');    

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();        
    }

    return (
        <form onSubmit={submitHandler}>
            <QuestionMark examples={examples} number={15}/>
            <div>
                <label>First Name</label>
                <input type="text" {...bindFirstName} />
            </div>     
            <div>
                <label>Last Name</label>
                <input type="text" {...bindLastName} />
            </div>   
            <button type='submit'>Submit</button>  
        </form>
    )
}

export default ExampleSet15
