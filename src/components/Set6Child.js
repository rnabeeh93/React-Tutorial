import React, { Component } from 'react'

//Showcases refs for class components
class Set6Child extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <React.Fragment>
                <input ref={this.inputRef} type="text" />
            </React.Fragment>
        )
    }
}

export default Set6Child
