import React, {useEffect, useRef, useState} from 'react'
import QuestionMark from './QuestionMark';
const examples = "Hooks - useRef, useImperativeHandle, useLayoutEffect, useDebugValue";

/* useRef - a way to access dom nodes directly
               
            *useRef can be used to reference an element but also any mutable value

    !useImperativeHandle, useLayoutEffect, useDebugValue
*/

//! Basic useRef
// function ExampleSet14() {
//     const inputRef = useRef(null);
//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={14}/>
//             <input type="text" ref={inputRef} />
//         </div>
//     )
// }

//! Interval useRef
function ExampleSet14() {    
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);        
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <div>
            <QuestionMark examples={examples} number={14}/>
            <div>Hook Timer - {timer} <button onClick={() => {clearInterval(intervalRef.current)}}>Clear Hook Timer</button></div>
        </div>
    )
}

export default ExampleSet14
