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

    handleUserInput(value){
        this.setState({userInput: value})
    }

    handleAddComment(){
        let text = {
            comment: this.state.userInput
        }
        axios.put(`/api/dog/${this.props.index}/${this.state.userInput}`)
        .then(response => {
            // this.handleUserInput(response.data)
            this.setState({ 
                comments: response.data
            })
        })
        .catch(error => console.log('error'))
    }

    render(){
        return(
            <div>
                <h6 className='commentsHead'>Comments:</h6>

                <div className="commentsDiv">
                    {this.state.comments}
                </div>
                
                <input onChange={(event) => this.handleUserInput(event.target.value)}/>
                
                <button onClick={() => this.handleAddComment()}>Comment</button>
            </div>
        )
    }
}

export default Comment;