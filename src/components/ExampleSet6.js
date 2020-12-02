import React, { Component } from 'react'
import QuestionMark from './QuestionMark';
import Set6Child from './Set6Child';
import Set6Child2 from './Set6Child2';

const examples = "Refs - element, class, forwarding";

/*--Refs: They make it possible to access dom nodes directly within react (avoid jquery)
          You can add references to elements directly inside your component, but you can also make references to children class components (not functional components)
          You can also pass a ref from a parent to one of it's children using forwarding (this is how we achieve functional refs)
            * In order to do this, the functional component has to be defined differently
*/

class ExampleSet6 extends Component {
    constructor(props) {
        super(props)        

        this.inputRef = React.createRef(); //This is the more updated way to make a ref
        this.cbRef = null; //This is an older way, known as a callback ref

        this.setCBRef = (element) => {
            this.cbRef = element;
        }

        this.componentRef = React.createRef();
        this.functionalRef = React.createRef();
    }

    componentDidMount()
    {
        //You must check for null when using callback refs, because it can call the callback with null when the component unmounts
        console.log(this.cbRef);
        if(this.cbRef !== null){
            this.cbRef.focus();
        }
        //console.log(this.inputRef);
        //this.inputRef.current.focus();
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    focusChild = () => {
        console.log(this.componentRef.current)
        this.componentRef.current.focusInput();
    }

    focusFunctionalChild = () => {
        this.functionalRef.current.focus();
    }
    
    render() {
        return (
            <div>
                <QuestionMark examples={examples} number={6}/>
                <input ref={this.inputRef}/>
                <input ref={this.setCBRef}/>
                <button onClick={this.clickHandler}>Click</button>
                <br/>
                <Set6Child ref={this.componentRef} />
                <button onClick={this.focusChild}>Focus Child</button>
                <br/>
                <Set6Child2 ref={this.functionalRef}/>
                <button onClick={this.focusFunctionalChild}>Focus Functional Child</button>
            </div>
        )
    }
}

export default ExampleSet6
