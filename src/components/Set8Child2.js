import React, { Component } from 'react'
import withCounter from './withCounter';

//Child component for withCounter HOC
export class Set8Child2 extends Component {    
    render() {
        const {count, incrementCount} = this.props;
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        )
    }
}

export default withCounter(Set8Child2);
