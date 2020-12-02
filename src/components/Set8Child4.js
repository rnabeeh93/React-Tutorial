import React, { Component } from 'react'

//Child component for Counter Render props
class Set8Child4 extends Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        )
    }
}

export default Set8Child4
