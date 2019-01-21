import React, {Component} from 'react'
import Doggos from './Doggos'
import Main from './Main'

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: ''
        }
    }

    handleChange(value){
        this.setState({userInput: value})
    }

    render(){
        // let displayDoggos = props.dogs.filter((dog, index) =>{
        //     return dogs.name.includes(this.state.userInput)
        // }).map((dog, index) => {
        //     return <Doggos key={index}/>
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