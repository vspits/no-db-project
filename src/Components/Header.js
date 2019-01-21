import React, {Component} from 'react'
import axios from 'axios'
import Doggos from './Doggos'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            doggos: [],
            userInput: ''
        }
    }

    componentDidMount(){
        axios.get('/api/dog')
        .then(response => {
            console.log(response);
            this.setState({doggos: response.data})
        })
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    render(){
        // let displayDoggos = this.state.doggos.filter((dogObj, index) =>{
        //     return dogObj.name.includes(this.state.userInput)
        // }).map((dogObj, index) => {
        //     return <Doggos key={index}
        //                 name={dogObj.name} 
        //                 bio={dogObj.bio}
        //                 image={dogObj.image}/>
        // })

        return (
            <div className='headerDiv'>
                <h1 className='headerTitle'>DogShiz.</h1>
                <input 
                    className='headerInputBar'
                    onChange={event => this.handleChange(event.target.value)} 
                    placeholder='Search the doggos' 
                />
                {/* {displayDoggos} */}
            </div>
        )
    }
}

export default Header;