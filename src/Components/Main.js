import React, {Component} from 'react'
import Doggos from './Doggos'
import axios from 'axios';
import NewDoggo from './NewDoggo'

class Main extends Component {
    constructor(){
        super()
        this.state = {
            doggos: [],
            name: '',
            image: '',
            bio: '',
        }
        this.getDoggoData = this.getDoggoData.bind(this)
    }

    componentDidMount(){
       this.getDoggoData()
    }

    getDoggoData(){
        axios.get('/api/dog')
        .then(response => {
            console.log(response.data);
            this.setState({doggos: response.data})
        })
    }

    render(){
        

        const mappedDoggos = this.state.doggos.map(
            (eachDoggoObj) => {
                return (
                    <Doggos 
                        key={eachDoggoObj.index} 
                        name={eachDoggoObj.name} 
                        bio={eachDoggoObj.bio}
                        image={eachDoggoObj.image}/>
                )
            }
        )

        return(
            <div className='mainbody'>
                <h1 className='mainbodytext'>All the doggos:</h1>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    {mappedDoggos}
                </div>
                <div>
                    <NewDoggo 
                        getDoggoData={this.getDoggoData}/>
                </div>
            </div>
        )
    }
}


export default Main;