import React, {Component} from 'react'
import Doggos from './Doggos'
import axios from 'axios';

class Main extends Component {
    constructor(){
        super()
        this.state = {
            doggos: [],
            name: '',
            image: '',
            bio: '',
        }
    }

    handleAddDog(){
        const bodyObj = {
            name: this.state.name,
            image: this.state.image,
            bio: this.state.bio
        }
        axios.post('/api/dog', bodyObj)
        .then(response => {
            console.log(response)
            this.setState({
                doggos: response.data
            })
        })
        this.setState({
            name: '',
            image: '',
            bio: ''
        })
    }

    render(){
        const mappedDoggos = this.state.doggos.map(
            (eachDoggoObj) => {
                return (
                    <Doggos key={eachDoggoObj.index} />
                )
            }
        )

        return(
            <div>
                <h1>All the doggos:</h1>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Doggos />
                    <Doggos />
                    <Doggos />
                </div>
            </div>
        )
    }
}


export default Main;