import React, {Component} from 'react'
import axios from 'axios'

class NewDoggo extends Component {
    constructor(props){
        super(props)
        this.state = {
            newDoggo: [],
            nameInput: '',
            imageInput: './Ace.jpg',
            bioInput: '',
        }
    }

    handleNameInput(value){
        this.setState({nameInput: value})
    }

    handleImageInput(value){
        this.setState({imageInput: value})
    }

    handleBioInput(value){
        this.setState({bioInput: value})
    }

    handleAddDoggo(){
        console.log('things are happening');
        
        const bodyObj = {
            name: this.state.nameInput,
            image: this.state.imageInput,
            bio: this.state.bioInput
        }
        console.log(bodyObj);
        
        axios.post(`/api/dog`, bodyObj).then(response => {
            console.log(response);
            this.props.getDoggoData()
        
        })
        this.setState({
            nameInput: '',
            imageInput: '',
            bioInput: ''
        })
    }

    render(){
        return (
            <div 
            className='addDoggoComponent'
            style={{height: '300px', width: '300px', display: 'flex', flexDirection: 'column'}}>
                <h3>Name:</h3>
                <input 
                className='newDoggoInput'
                onChange={(event) => this.handleNameInput(event.target.value)}/>

                <h3>Bio:</h3>
                <input 
                className='newDoggoInput'
                onChange={(event => this.handleBioInput(event.target.value))}/>

                <h3>Image File:</h3>
                <input 
                className='newDoggoInput'
                onChange={(event) => this.handleImageInput(event.target.value)}/>

                <button 
                className='addDoggoButton'
                onClick={() => this.handleAddDoggo()}>Add Doggo</button>
            </div>
        )
    }
}

export default NewDoggo;