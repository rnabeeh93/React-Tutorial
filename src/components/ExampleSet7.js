import React, { Component } from 'react'
import Set7Child from './Set7Child';
import QuestionMark from './QuestionMark';
import Set7Child2 from './Set7Child2';
import Set7Child3 from './Set7Child3';

const examples = "Portals, Error boundaries";

/*--Portals: Render children into a dom node that exists outside of the hierarchy
                All elements in our example set exist under the root element defined in index.html, rendered by index.js, if we want
                to assign elements outside of this hierarchy, this is where portals come in handy
                    *It's important to note that portals still behave like normal children inside the hierarchy they are just placed externally in the dom

/*--Error Boundaries: implements one or both of the error lifecycle methods to stop react from unmounting the entire application
        static getDerivedStateFromError(error) - is used to render a fallback ui after an error is thrown
        
        componentDidCatch(error, info) - is used to log the error information        

        ** It is important to note that it will catch errors in all children of the component, but not in event handlers (have to use try catch for those)
*/

class ExampleSet7 extends Component {
    render() {
        return (
            <div>
                <QuestionMark examples={examples} number={7}/>
                <Set7Child />
                <Set7Child3><Set7Child2 hero="Superman"/></Set7Child3>
                <Set7Child3><Set7Child2 hero="Batman"/></Set7Child3>
                {/* <Set7Child3><Set7Child2 hero="Joker"/></Set7Child3>  //This showcases error handling */}
            </div>
        )
    }
}

export default ExampleSet7
