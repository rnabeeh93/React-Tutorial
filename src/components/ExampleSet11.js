import React, {useState, useEffect} from 'react'
import QuestionMark from './QuestionMark';
import axios from 'axios';
const examples = "Hooks - useEffect";

/* useEffect - simulates lifecycle methods and side effects, allows grouping of functionality 
               
               *Can replace componentDidMount, DidUpdate, and WillUnmount
               *Use effect gets executed after every render of the function, this can affect performance -> conditional useEffect
               
               !Suspense will handle fetching in the future
*/

//! Normal useEffect (componentdidmount and componentdidupdate)
// function ExampleSet11() {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     })

//     return (
//         <div>
//             <QuestionMark examples={examples} number={11} />
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
//         </div>
//     )
// }

//! Conditional useEffect
// function ExampleSet11() {
//     const [count, setCount] = useState(0);
//     const [name, setName] = useState("");    
//     useEffect(() => {
//         console.log("Use effect - updating document title");
//         document.title = `You clicked ${count} times`;
//     }, [count]);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={11} />
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
//         </div>
//     )
// }

//! Run effect once (componentdidmount)
// function HookMouse() {
//     const [x, setX] = useState(0);
//     const [y, setY] = useState(0);    
//     const logMousePosition = e => {
//         console.log('Mouse event');
//         setX(e.clientX);
//         setY(e.clientY);
//     }

//     useEffect(() => {
//         console.log("useEffect called");
//         window.addEventListener('mousemove', logMousePosition);     
        
//         //?componentwillunmount code
//         return () => {
//             console.log("Component unmounting code") ;
//             window.removeEventListener('mousemove', logMousePosition);
//         }
//     }, []);

//     return (
//         <div>
//             <QuestionMark examples={examples} number={11} />
//             Hooks X - {x} Y - {y}
//         </div>
//     )
// }

//! useEffect with cleanup (componentwillunmount)
// function ExampleSet11() {
//     const [display, setDisplay] = useState(true);

//     return (
//         <div>
//             <button onClick={() => setDisplay(!display)}>Toggle Display</button>
//             {display && <HookMouse/>}
//         </div>
//     )
// }

//! useEffect interval hook with incorrect dependency
    //? There are two solutions: setCount(prevCount => prevCount + 1) or include [count] in useEffect
// function ExampleSet11() {
//     const [count, setCount] = useState(0);
//     const tick = () => {
//         setCount(count + 1); 
//     }

//     useEffect(() => {
//         const interval = setInterval(tick, 1000);
//         return () => {
//             clearInterval(interval);
//         }
//     }, []); //it is a common mistake to leave out the dependency list but the problem here is that it isn't letting the effect know to pay attention to the state after the first render, so set interval does nothing

//     return (
//         <div>
//             <QuestionMark examples={examples} number={11} />
//             <h2>{count}</h2>
//         </div>
//     )
// }

//! Fetching data with useEffect
function ExampleSet11() {
    //Post functions
    const [post, setPost] = useState({});    

    //Id functions
    const [id, setId] = useState(1);
    const handleChange = e => { setId(e.target.value) }

    //IdFromButtonClick functions
    const [idFromButtonClick, setidFromButtonClick] = useState(1);
    const handleClick = () => { setidFromButtonClick(id) }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res => {            
            setPost(res.data);
        })
        .catch(err => console.log(err))
    }, [idFromButtonClick]);    

    //Main
    return (
        <div>
            <QuestionMark examples={examples} number={11} />
            <input type="text" value={id} onChange={handleChange} />
            <button type="button" onClick = {handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    )
}


export default ExampleSet11
