import React, {Component} from 'react'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    searchFunction(userInput){
        
    }

    render(){
        return (
            <div>DogShiz</div>
            <input 
                onChange={event => this.handleChange(event.target.value)} 
                placeholder='Search the doggos' 
            />
            <button
                onClick={() => }
            >Search</button>
        )
    }
}

export default Headers;