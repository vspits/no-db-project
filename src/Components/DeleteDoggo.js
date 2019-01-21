import React, {Component} from 'react'
import axios from 'axios'
import './ex.png'

class DeleteDoggo extends Component {
    constructor(){
        super()
        this.state = {
            doggos: []
        }
    }

    handleDeleteDoggo(){
        axios.delete(`/api/dog`).then(response => this.setState({doggos: response.data}))
    }

    render(){
        return (
            <div>
                <button 
                className='deleteButton'
                onClick={() => this.handleDeleteDoggo}></button>
            </div>
        )
    }
}

export default DeleteDoggo;