import React, {useState, useCallback, useMemo} from 'react'
import QuestionMark from './QuestionMark';
import Set13Child1 from './Set13Child1';
import Set13Child2 from './Set13Child2';
import Set13Child3 from './Set13Child3';
const examples = "Hooks - useCallback, useMemo";

/* useCallback - A hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed
               
               * Useful when passing callbacks to optimized  child components that rely on reference equality to prevent unnecessary renders                                                          
               ! useMemo and useCallback incur a cost if not implemented for the right reasons
               ? The above reasons: Computationally heavy functions, complex components, referential equality
               ! Basically wait until the component has a legitimate run-time issue before considering this option, if it's basic it isn't saving much time

    useMemo - Similar to useCallback; a method to reduce unecessary rerenders
               ! The difference between these two is: useCallback caches the provided function instance, useMemo invokes the provided function and caches it's result
*/

//! Complete rerender example (useCallback)
//? if we add react.memo in children it stops most components from rerendering, but not the parent component so it will cause the buttons to still rerender
//? because a new increment<> function is created when the parent is rerendered, and two functions are never equal because of reference equality, so it rerenders both button components
// export default function ExampleSet13() {
//     const [age, setAge] = useState(25);
//     const incrementAge = useCallback(() => {
//         setAge(age + 1);
//     }, [age]);

//     const [salary, setSalary] = useState(50000);
//     const incrementSalary = useCallback(() => {
//         setSalary(prevSalary => prevSalary + 1000);
//     }, [salary]);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={13}/>
//             <Set13Child1/>
//             <Set13Child2 text="Age" count={age}/>
//             <Set13Child3 handleClick={incrementAge}>Increment Age</Set13Child3>
//             <Set13Child2 text="Salary" count={salary}/>
//             <Set13Child3 handleClick={incrementSalary}>Increment Salary</Set13Child3>
//         </div>
//     )
// }

//! useMemo (countertwo would still be slow because of rerendering causing isEven to be called)
export default function ExampleSet13() {
    const [counterOne, setCounterOne] = useState(0);        
    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }

    const [counterTwo, setCounterTwo] = useState(0);
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++            
        return counterOne % 2 === 0
    }, [counterOne]);    

    return (
        <div>
            <QuestionMark examples={examples} number={13}/>
            <div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? ' Even' : ' Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count One - {counterTwo}</button>
            </div>
        </div>
    )
}