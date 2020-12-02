import React, { Component } from 'react'
import QuestionMark from './QuestionMark';
import Set8Child1 from './Set8Child1';
import Set8Child2 from './Set8Child2';
import Set8Child3 from './Set8Child3';
import Set8Child4 from './Set8Child4';
import Counter from './Counter';

const examples = "Higher order components, Render Props";

/*--Higher order components are a way to reuse functionality that is needed across multiple components without hoisting
        An already used hoc is used in Set5Child when we use React.memo on a functional component; this takes a component, adds some 
        stuff to it, then returns the new component

        *It's important to note that props are passed to the HOC not the wrapped componenet (it receives whatever props the HOC gives it)
        so you will need to use the spread operator to pass down the rest of the props that are not immediately used in the HOC.
        Ex) {...this.props}

  --Render Props is a technique for sharing code between react components by using a prop whose value is a function. 

    ** Both of these techniques have similar results with minor pros and cons, render props is currently the standard as it seems
*/

export class ExampleSet8 extends Component {
    render() {
        return (
            <div>
                <QuestionMark examples={examples} number={8}/> 
                <div>
                    <Set8Child1 name="Rameal"/>
                    <Counter render={(count, incrementCount) => <Set8Child3 count={count} incrementCount={incrementCount} name="Rameal"/>}/>    
                </div>                
                <div>
                    <Set8Child2/>       
                    <Counter render={(count, incrementCount) => <Set8Child4 count={count} incrementCount={incrementCount} />}/>    
                </div>                
            </div>
        )
    }
}

export default ExampleSet8
