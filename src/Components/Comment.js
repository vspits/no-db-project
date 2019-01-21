import React, {Component} from 'react'
import axios from 'axios';

class Comment extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: [],
            userInput: ''
        }
    }

    componentDidMount(){
        axios.get('/api/dog').then(response => this.setState({ doggos: response.data}))
    }

    handleUserInput(value){
        this.setState({userInput: value})
    }

    handleAddComment(index){
        let text = {
            text: this.state.userInput
        }
        axios.put(`/api/dog/${index}`, text)
        .then(response => {
            this.handleUserInput(response.data)
            this.setState({ 
                doggos: response.data
            })
        })
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