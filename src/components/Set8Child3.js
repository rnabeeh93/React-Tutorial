import React, { Component } from 'react'

//Child component for Counter Render props
class Set8Child3 extends Component {
    render() {
        const {count, incrementCount, name} = this.props;
        return (
            <button onClick={incrementCount}>{name} Clicked {count} Times</button>
        )
    }
}

export default Set8Child3
