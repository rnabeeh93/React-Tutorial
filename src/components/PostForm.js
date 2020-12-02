import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userid: "",
             title: "",
             body: ""
        }
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    render() {
        const {userid, title, body} = this.state;

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userid" value={userid} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}/>
                    </div>
                    <button>Submit</button>
                </form>                
            </div>
        )
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
}

export default PostForm
