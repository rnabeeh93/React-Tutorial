import React, { Component } from 'react'
import QuestionMark from './QuestionMark';
import { UserConsumer } from './userContext';
import UserContext from './userContext';

const examples = "Context";

/* Context - a way to send data to children components without having to go to each leaf down the hierarchy.
             Below are two methods for accessing a context: 
             Through the consumer context element
             Through the context directly using contexttype - pros: simpler 
                                                              cons: can only subscribe to a single context
*/

class ExampleSet9 extends Component {

    static contextType = UserContext; //Use this if application allows public class field syntax
    
    render() {
        return (
            <div>
                <QuestionMark examples={examples} number={9}/>  
                <div>Hello {this.context}</div>                
                <UserConsumer>{username => { return <div>Hello {username}</div> }}</UserConsumer>               
            </div>
        )
    }
}

//ExampleSet9.contextType = UserContext; //Use this if you cannot use static contextType in your react component

export default ExampleSet9
