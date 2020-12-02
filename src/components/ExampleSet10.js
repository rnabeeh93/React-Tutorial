import React, {useState} from 'react'
import QuestionMark from './QuestionMark';
const examples = "Hooks - usestate"

/*  Hooks - a new featuring in react 16.8 that allow you to use react features without having to write a class.
          *Do not work inside a class
          
          *Reasons for Hooks          
          *1. Understand how this keyword works in Javascript, classes don't minify very well, must remember to bind event handlers
          *2. The only way to reuse stateful components is using HOC or RP but hooks allows stateful logic without changing component hierarchy
          *3. Creating components for complex scenarios, related code is not in one place (componentdidmount, componentdidupdate, etc)

          *Rules for Hooks
          *1. Only call hooks at the top level, not inside loops, conditions, or nested functions
          *2. Only call hooks from react functions, not just any regular javascript function

          !useState is missing a callback function, the two solutions are to use useEffect with useState or import a library that implements a callback argument
*/

//! Basic useState example
// function ExampleSet10() {
//     const [count, setCount] = useState(0);    

//     return (
//         <div>
//             <QuestionMark examples={examples} number={10}/>    
//             <button onClick={() => setCount(count + 1)}>Count {count}</button>
//         </div>
//     )
// }

//! useState (unsafe example)
// function ExampleSet10() {
//     const initialCount = 0;
//     const [count, setCount] = useState(initialCount);    

//     const incrementFive = () => {
//         for(let i = 0; i < 5; i++){
//             setCount(count + 1);
//         }
//     }

//     return (
//         <div>
//             <QuestionMark examples={examples} number={10}/>    
//             <span>Count: {count}</span>
//             <button onClick={() => setCount(initialCount)}>Reset</button>
//             <button onClick={() => setCount(count - 1)}>Decrement</button>
//             <button onClick={() => setCount(count + 1)}>Increment</button>            
//             <button onClick={() => incrementFive()}>Increment Five</button>
//         </div>
//     )
// }

//! useState with previous state
// function ExampleSet10() {
//     const initialCount = 0;
//     const [count, setCount] = useState(initialCount);    

//     const incrementFive = () => {
//         setCount(prevCount => prevCount + 5);
//     }

//     return (
//         <div>
//             <QuestionMark examples={examples} number={10}/>    
//             <span>Count: {count}</span>
//             <button onClick={() => setCount(initialCount)}>Reset</button>
//             <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>            
//             <button onClick={() => incrementFive()}>Increment Five</button>
//         </div>
//     )
// }

//! useState merge example (must use spread operator, unlike stateful components), also showcases lack of callback to get updated state
function ExampleSet10() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    const changeName = e => {
        console.log(name);
        setName({...name, [e.target.name]: e.target.value});
        console.log(name);
    }

    return (
        <form>
            <QuestionMark examples={examples} number={10}/>  
            <input type="text" name="firstName" value={name.firstName} onChange={changeName}/>
            <input type="text" name="lastName" value={name.lastName} onChange={changeName}/>
            <h2>Your first name is: {name.firstName}</h2>
            <h2>Your last name is: {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

//! useState with arrays
// function ExampleSet10() {
//     const [items, setItems] = useState([]);
//     const addItem = () => {
//         setItems([...items, {id: items.length, value: Math.floor(Math.random() * 10) + 1}]);
//     }

//     return (
//         <div>
//             <QuestionMark examples={examples} number={10}/>  
//             <button onClick={addItem}>Add a number</button>
//             <ul>
//                 {
//                     items.map(item => <li key={item.id}>{item.value}</li>)
//                 }
//             </ul>
//         </div>
//     )
// }

export default ExampleSet10
