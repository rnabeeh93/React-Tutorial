import React, { Component } from 'react'

//Showcases error boundaries
class Set7Child3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    static getDerivedStateFromError(error)
    {        
        return{
            hasError: true
        }
    }

    componentDidCatch(error, info){
        // console.log(error);
        // console.log(info);
    }

    render() {
        if(this.state.hasError){
            return <h2>Something went wrong</h2>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default Set7Child3
