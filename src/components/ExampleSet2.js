import React, { Component } from 'react'
import {Set2Child} from './Set2Child';
import QuestionMark from './QuestionMark';

const examples = "Method props, child-parent communication, conditional rendering";

class ExampleSet2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             greeting: 'Child'
        }
    }

    greetEach = (childParam) => {
        /* Adding a parameter and using arrow functions in the child componenet allows children components to communicate with their parents */
        this.setState({greeting: childParam});
    }
    
    render() {
        /* Just like with variables, you can pass full methods to children components */
        /* There are multiple ways to conditionally render
                If else: If(condition) {return (jsx)} else {return (jsx)} - This method works well but requires redundant code because the if else can't work in the body of the jsx
                Element variables: If you just need some things to be rendered differently (like a name) you can set the if else before the return and set it to a variable used in the jsx
                Ternary conditional: JSX allows inline ternary rendering, although the end result is similar to if else
                Short-circuit operator: Like ternary but without the else. Unlike ternary, short-circuit renders nothing at all if false
        */ 

        /* If else rendering */

            // if(this.props.render === true){
            //     return (
            //         <div>
            //             <h1>Hello {this.state.greeting}!</h1>
            //             <Set2Child greetHandler={this.greetEach} greeting={this.state.greeting}/>
            //         </div>
            //     )
            // }
            // else{
            //     return <div>Could not render</div>
            // }

        /* Element variable rendering */        
            /* Using styling */
                // let renderStyle = {display: `${this.props.render === true ? 'block' : 'none'}`};         
                // return (
                //     <div style={renderStyle}>
                //         <h1>Hello {this.state.greeting}!</h1>
                //         <Set2Child greetHandler={this.greetEach} greeting={this.state.greeting}/>
                //     </div>
                // )
            /* Using actual elements */
                // let element;
                // if(this.props.render === true){
                //     element = <div>Render!</div>   
                // }
                // else{
                //     element = <div>Error!</div>
                // }
                // return (
                //     <div>                        
                //         <h1>Hello {this.state.greeting}!</h1>
                //         <Set2Child greetHandler={this.greetEach} greeting={this.state.greeting}/>
                //         <h2>{element}</h2>
                //     </div>
                // )

        /* Ternary conditional */
            // return (
            //     this.props.render ?                 
            //         <div>
            //             <h1>Hello {this.state.greeting}!</h1>
            //             <Set2Child greetHandler={this.greetEach} greeting={this.state.greeting}/>
            //         </div> : 
            //         <h2>Error!</h2>
            // )

        /* Short-circuit operator */
        return this.props.render && <div><QuestionMark examples={examples} number={2}/><h1>Hello {this.state.greeting}!</h1><Set2Child greetHandler={this.greetEach} greeting={this.state.greeting}/></div>
    }
}

export default ExampleSet2
