import React, { Component } from 'react';
import QuestionMark from './QuestionMark';

const examples = "setstate callback, this binding, destructuring props/state";

const FunctionalEx = ({name, heroName, count}) => {         
    /* For functional components you can destructure in the parameters or in the body like a class component */    
    return(
        <h3>Functional destructure: Hello {name} aka {heroName}. <br/> It has been {count} day(s) since your last crime-fighting session.</h3>
    )
}

class ExampleSet1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 1
        }

        //this.updateCount = this.updateCount.bind(this);
    }

    componentDidMount()
    {
        /* Showcases callback and prevstate setstate
        // let countInc = setInterval(() => {                                    
        //     this.setState((prevState, props) => ({        
        //         count: prevState.count + 1
        //     }), () => {
        //         console.log(this.state.count);
        //         (this.state.count + 1) > 10 && clearInterval(countInc);
        //     });            
        // }, 2000);*/
    }

    incrementFive(){
        /*React will group multiple setstate calls to a single update for better performance */
        this.updateCount();
        this.updateCount();
        this.updateCount();
        this.updateCount();
        this.updateCount();
    }

    updateCount = () => {
        /*Calls to setstate are asynchronous, which means that if you call set state and then log it, it will run simultaneously
            use the callback function to get the actual updated value */
            // this.setState({
            //     count: this.state.count + 1
            // }, () => {
            //     console.log(`Real count: ${this.state.count}`);
            // });
            // console.log(this.state.count);

        /*If you want to update the current state based on the previous state you need to use a function for setstate */
            this.setState((prevState, props) => ({
                count: prevState.count + 1
            }));
    }
    
    render() {
        /*There are several ways to bind this to a function
            Inline binding: this.updateCount.bind(this) - This generates a new event handler on every render and is especially costly with nested children            
            Fat arrow binding: () => this.updateCount() - This method, like the previous, incurs a cost on every render
            Constructor binding: this.updateCount = this.updateCount.bind(this) - The best and most common way, only incurs a singular cost when the class is created
            Function binding: updateCount = () => {} - The most succinct implementation, and as good as constructor binding
        */
        
        const {count} = this.state;
        const {name, heroName} = this.props;
        return (
            <div>  
                <QuestionMark examples={examples} number={1}/>                              
                <h2>Class destructure: Hello {name} aka {heroName}. <br/> It has been {count} day(s) since your last crime-fighting session.</h2>
                <FunctionalEx name={name} heroName={heroName} count={count} />    
                <button onClick={this.updateCount}>Increment</button>            
            </div>
        )
    }
}

export default ExampleSet1
