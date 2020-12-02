import React, {useState, useEffect, useReducer} from 'react'
import QuestionMark from './QuestionMark';
import Set12Child1 from './Set12Child1';
import axios from 'axios';

const examples = "Hooks - useContext, useReducer";

/* useContext - Provides a way to pass data down a tree without visiting every leaf    
                *Much easier than normal context flow
                
   useReducer - Hook used for state management as an alternative to useState
                *useState is built from useReducer
                *javascript reduce() takes a function, operates on an array and provides a single output (Ex. [1, 2, 3, 4] => 10)
                *useReducer(reducer, initialState) => [newState, dispatch] = reducer(currentState, action)

                ?useState cases: primitive types, one or two states, if transitions aren't related, no business logic, local
                ?useReducer cases: objects/arrays, many states, if transitions are related, complex business logic, global
*/

//! Normal useContext
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// function ExampleSet12() {    
//     return (
//         <div>
//             <QuestionMark examples={examples} number={12} />
//             <UserContext.Provider value="Rameal">
//                 <ChannelContext.Provider value="The Lotus Perspective">
//                     <Set12Child1/>
//                 </ChannelContext.Provider>
//             </UserContext.Provider>            
//         </div>
//     )
// }

//! Normal useReducer
// const initialState = 0;
// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }    
// }

// function ExampleSet12() {        
//     const [count, dispatch] = useReducer(reducer, initialState);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={12} />
//             <div>Count - {count}</div>
//             <button onClick={() => dispatch('decrement')}>Decrement</button>          
//             <button onClick={() => dispatch('increment')}>Increment</button>          
//             <button onClick={() => dispatch('reset')}>Reset</button>          
//         </div>
//     )
// }



//!Complex useReducer (state and action as objects, pros: changing the state without adding more switch options (inc5, dec5), maintaining more than one state (first/second counter))
// const initialState = {firstCounter: 0, secondCounter: 10, currCounter: "firstCounter"};
// const reducer = (state, action) => {
//     const {currCounter} = state;        
//     switch(action.type){
//         case 'increment':
//             return {...state, [currCounter]: state[currCounter] + action.value}        
//         case 'decrement':
//             return {...state, [currCounter]: state[currCounter] - action.value}            
//         case 'reset':
//             return initialState;
//         case 'swap':
//             return {...state, currCounter: currCounter === "firstCounter" ? "secondCounter" : "firstCounter"}
//         default:
//             return state;
//     }    
// }

// function ExampleSet12() {        
//     const [state, dispatch] = useReducer(reducer, initialState);        

//     return (
//         <div>
//             <QuestionMark examples={examples} number={12} />
//             <div>First Counter - {state.firstCounter}</div>
//             <div>Second Counter - {state.secondCounter}</div>
//             <button onClick={() => dispatch({type: 'swap'})}>Swap Counter ({state.currCounter})</button>
//             <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>  
//             <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>          
//             <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>     
//             <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>          
//             <button onClick={() => dispatch({type: 'reset'})}>Reset</button>          
//         </div>
//     )
// }

//! Multiple states with the same state transitions (multiple usereducers, this is the easier version of the above code) 
// const initialState = 0;
// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }    
// }

// function ExampleSet12() {        
//     const [count, dispatch] = useReducer(reducer, initialState);
//     const [count2, dispatch2] = useReducer(reducer, initialState);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={12} />
//             <div>
//                 <div>Count - {count}</div>
//                 <button onClick={() => dispatch('decrement')}>Decrement</button>          
//                 <button onClick={() => dispatch('increment')}>Increment</button>          
//                 <button onClick={() => dispatch('reset')}>Reset</button>   
//             </div>
//             <div>
//                 <div>Count2 - {count2}</div>
//                 <button onClick={() => dispatch2('decrement')}>Decrement</button>          
//                 <button onClick={() => dispatch2('increment')}>Increment</button>          
//                 <button onClick={() => dispatch2('reset')}>Reset</button>   
//             </div>     
//         </div>
//     )
// }

//! useReducer with useContext
export const CountContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//     switch(action){
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState;
//         default:
//             return state;
//     }    
// }

// function ExampleSet12() {        
//     const [count, dispatch] = useReducer(reducer, initialState);      

//     return (
//         <div>
//             <QuestionMark examples={examples} number={12} />
//             <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
//                 <div>
//                     <h1>Count - {count}</h1>
//                     <Set12Child1/>
//                 </div>  
//             </CountContext.Provider>                         
//         </div>
//     )
// }

//! useReducer fetch data
const initialState = {loading: true, error: '', post: {}};
const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {loading: false, post: action.payload, error: ''};
        case 'FETCH_ERROR':
            return {loading: false, post: {}, error: "Something went wrong!"};
        default:
            return state;
    }
}

function ExampleSet12() {            
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then(res => dispatch({type: 'FETCH_SUCCESS', payload: res.data}))
        .catch(err => dispatch({type: 'FETCH_ERROR'}));            
    }, []);

    return (
        <div>
            <QuestionMark examples={examples} number={12} />
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default ExampleSet12
