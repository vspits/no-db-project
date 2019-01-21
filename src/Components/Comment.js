import React, {Component} from 'react'
import axios from 'axios';

class Comment extends Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            userInput: ''
        }
    }

    componentDidMount(){
        axios.get('/api/dogs').then(response => this.setState({ doggos: response.data}))
    }

    handldeUserInput(value){
        this.setState({userInput: value})
    }

    handleAddComment(){
        axios.put('/api/dogs/:id')
        .then(response => this.setState({ doggos: response.data}))
        .catch(error => console.log('error'))
    }

    render(){
        return(
            <div>
                <h6 className='commentsHead'>Comments:</h6>
                <input onChange={(event) => this.handleAddComment(event.target.value)}/>
                <button onClick={() => this.handleAddComment(this.state.userInput)}>Comment</button>
                {this.state.comments}
            </div>
        )
    }
}

export default Comment;