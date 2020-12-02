import React, {useContext} from 'react'
import {CountContext} from './ExampleSet12';
import Set12Child2 from './Set12Child2';

//useContext example
export default function Set12Child1() {
    const countContext = useContext(CountContext);
    return (
        <div>
            <div>
                <h2>Child 1</h2>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>          
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>          
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>  
            </div>
            <Set12Child2/>
        </div>
    )
}
