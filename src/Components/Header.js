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
            <div>
                <h1>DogShiz</h1>
                <input 
                    onChange={event => this.handleChange(event.target.value)} 
                    placeholder='Search the doggos' 
                />
                <button
                    onClick={() => this.searchFunction(this.state.userInput)}
                >Search</button>
            </div>
        )
    }
}

export default Header;