import React, {Component} from 'react'

const Doggos = (props) => {
    return (
        <div
            className='doggoComponent'
            style={{border: '1px solid black', height: '400px', width: '300px'}}>

            <div 
                className='doggoProfilePic'>

                <img style={{border: '1px solid black', height: '250px', width: '200px'}}/>
            </div>

            <div 
                className='doggoComponentText'
                style={{border: '1px solid black', height: '20%', width: '80%'}}>

            </div>

        </div>
    )
}

export default Doggos;