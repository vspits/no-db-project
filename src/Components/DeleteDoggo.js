import React, {Component} from 'react'
import axios from 'axios'
import './ex.png'

class DeleteDoggo extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         doggo: []
    //     }
    // }

    handleDeleteDoggo(index){  
        console.log(index);
              
        axios.delete(`/api/dog/${index}`).then(response => {
            console.log('11,', response.data)
            this.setState({doggo: response.data})})
    }

    render(){
        return (
            <div>
                <button 
                className='deleteButton'
                onClick={() => this.handleDeleteDoggo(this.props.index)}>Remove Doggo</button>
            </div>
        )
    }
}

export default DeleteDoggo;