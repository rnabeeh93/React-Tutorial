import React, { PureComponent } from 'react'
import QuestionMark from './QuestionMark';
import Set5Child from './Set5Child';

const examples = "Fragments, pure components, memo";

/*-- Fragments allow you to group children elements without adding extra nodes to the dom (you can avoid wrapping children elements with unnecessary divs)
        Shorthand for <React.Fragment></React.Fragment> === <></> except that you cannot pass the key attribute to the shorthand, which stops you from using javascript's map function */

/*-- Pure components allow you to create class components in a different way than extending react.Component
        Regular class Component: does not implement shouldComponentUpdate, it always returns true
        Pure Component: implements shouldComponentUpdate automatically with a *shallow props and state comparison
    Use pure components when you need to boost performance by stopping uneccessary rerenders between the parent and child components

/*-- Memo is the same as pure components, but for functional instead of class components
     React.memo() is a higher order component; it accepts a component, adds some stuff to it, and returns all of that as one component

    * For primitive types, a shallow comparison returns true if a and b are both the same value and type. For complex types, returns true if a and b are the exact same object (not the same type with the same values but the EXACT same object) 
*/       
   
class ExampleSet5 extends PureComponent {
    constructor()
    {
        super();
        this.state = {
            name: "Rameal",
            count: 0
        }
    }

    componentDidMount()
    {       
        /* This function will only cause our pure component to render once because of the shallow comparison */
            // setInterval(() => {                                    
            //     this.setState({name: "Rameal"});            
            // }, 2000);        

        /* This function will cause our pure component to rerender but our memo child won't */
            // let countInc = setInterval(() => {                                    
            //     this.setState((prevState, props) => ({        
            //         count: prevState.count + 1
            //     }), () => {                    
            //         (this.state.count + 1) > 10 && clearInterval(countInc);
            //     });            
            // }, 2000);
    }

    render() {
        console.log("Render: ExampleSet5");
        return (
            <div>
                <QuestionMark examples={examples} number={5}/>
                <Set5Child name={this.state.name}/>
            </div>
        )
    }
}

export default ExampleSet5
