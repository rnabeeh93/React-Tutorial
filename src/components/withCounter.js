import React, { Component } from 'react'

//HOC for ExampleSet8
const withCounter = (WrappedComponent, incrementNumber = 1) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return {count: prevState.count + incrementNumber}
            });
        }

        render(){
            return <WrappedComponent incrementCount={this.incrementCount} count={this.state.count} {...this.props}/>
        }
    }
    return WithCounter;
}

export default withCounter
