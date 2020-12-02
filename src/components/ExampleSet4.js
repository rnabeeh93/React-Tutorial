import React, { Component } from 'react'
import QuestionMark from './QuestionMark';

const examples = "Form handling, lifecycle methods (mount, unmount, update, error)";

//Method explanations

//-- Mounting
    /*constructor(props)
        Gets called whenever a new component is created. 
            Pros: initializing state, binding event handlers
            Cons: can cause side effects (ex. http requests)
            extra: requires super(props). directly overwrites this.state (should be the only place that does this)
    */
   /*static getDerivedStateFromProps(props, state)
        When the state of the component depends on changes in props over time
            pros: can also set the state by returning an object that represents the state of the component based on the props
            cons: cannot call this.setstate. can also cause side effects
   */
  /*render()
        Reads props and state and returns jsx
            cons: do not change state, interact with dom, or make ajax calls
            extra: This is the only required method for a react class component. children components lifecycle methods are executed when this method triggers
  */
  /*componentDidMount()
        Invoked immediately after a component and all its children components have been rendered to the DOM
            pros: This is where you should cause side effects like interact with DOM or perform ajax calls
  */

//-- Updating
    /*static getDerivedStateFromProps(props, state)
        Same as above
    */
    /*shouldComponentUpdate(nextProps, nextState)
        Dictates if the component should re-render or not
            pros: good for performance optimization
            cons: can also cause side effects
    */
    /*render()
        Same as above
    */
    /*getSnapshotBeforeUpdate(prevProps, prevState)
        Called right before the changes from the virtualDOM are to be reflected in the DOM
            pros: Captures some information from the DOM (like scroll position)
            extra: can return null or a value. The value will be based as the third method to componentDidUpdate       
    */
    /*componentDidUpdate(prevProps, prevState, snapshot)
        Called after the render is finished in the re-render cycles.
            pros: Guaranteed to be only called once. Greate place to cause side effects
    */

//-- Unmounting
    /*componentWillUnmount()
        Method is invoked immediately before a component is unmounted and destroyed
            pros: Perfect for cancelling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers
            cons: Do not call the setstate method
    */

//-- Error handling
    /*static getDerivedStateFromError(error)
      componentDidCatch(error, info)
        When there is an error either during rendering, in a lifecycle method, or in the constructor of any child component
            extra: These are further discussed in the errors component (check question mark after running npm start)
    */

class ExampleSet4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: 'react'            
        }

        console.log('Mount: Constructor called 1st');
    }

    componentDidMount(){
        console.log("Mount: componentDidMount called 4th");
    }

    componentDidUpdate(){
        console.log("Update: componentDidUpdate called 5th")
    }

    static getDerivedStateFromProps(props, state){
        console.log("Mount: getDerivedStateFromProps called 2nd. Update: getDerivedStateFromProps called 1st");
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Update: getSnapshotBeforeUpdate called 4th");
        return null;
    }

    handleCommentsChange = (event) => {
        this.setState({comments: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    }

    handleTopicChange = event => {
        this.setState({topic: event.target.value});
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }    
    
    render() {  
        console.log("Mount: render called 3rd. Update: render called 3rd");
        const {username, comments, topic} = this.state;

        //To turn form elements into react forms, have react handle the submit and react handle the value whenever it changes
        return (
            <form onSubmit={this.handleSubmit}>
                <QuestionMark examples={examples} number={4}/>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}/>
                </div>                
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>   
            </form>
        )
    }

    shouldComponentUpdate(){
        console.log("Update: shouldComponentUpdate called 2nd");
        return true;
    }
}

export default ExampleSet4
