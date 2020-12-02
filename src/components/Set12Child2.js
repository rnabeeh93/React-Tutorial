import React, {useContext} from 'react'
import { UserContext, ChannelContext, CountContext } from "./ExampleSet12";

//useContext example
export default function Set12Child2() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    const countContext = useContext(CountContext);
    console.log(user)
    return (
        <div>
            <div>
                <h2>Child 2</h2>
                <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>          
                <button onClick={() => countContext.countDispatch('increment')}>Increment</button>          
                <button onClick={() => countContext.countDispatch('reset')}>Reset</button>  
            </div>
            {
                user && channel && <p>User - {user} | Channel - {channel}</p>
            }            
        </div>
    )
}
