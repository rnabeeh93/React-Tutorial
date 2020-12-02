import React, { Component } from 'react'
import withCounter from './withCounter';

//Child component for withCounter HOC
class Set8Child1 extends Component {    
    render() {
        const {count, incrementCount, name} = this.props;
        return (
            <button onClick={incrementCount}>{name} Clicked {count} Times</button>
        )
    }
}

export default withCounter(Set8Child1, 2)
