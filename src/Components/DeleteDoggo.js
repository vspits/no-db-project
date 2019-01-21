import React, {Component} from 'react'
import axios from 'axios'
import './ex.png'

class DeleteDoggo extends Component {
    constructor(){
        super()
        this.state = {
            doggo: []
        }
    }

    handleDeleteDoggo(index){
        axios.delete(`/api/dog/${index}`).then(response => this.setState({doggo: response.data}))
    }

    render(){
        return (
            <div>
                <button 
                className='deleteButton'
                onClick={() => this.handleDeleteDoggo(this.state.doggo)}>Remove Doggo</button>
            </div>
        )
    }
}

export default DeleteDoggo;