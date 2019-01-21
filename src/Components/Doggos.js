import React from 'react'
import Comment from './Comment'
import DeleteDoggo from './DeleteDoggo'

const Doggos = (props) => {
    return (
        <div 
            className='doggoComponent'
            style={{height: '90vh', width: '30vw'}}>

            <div
                className='doggoProfilePic'>
                <img 
                    src={require(`${props.image}`)} 
                    style={{width: '70%'}}/>
            </div>

            <div 
                className='doggoComponentText'
                style={{height: '20%', width: '100%', display: 'flex', flexDirection: 'column'}}>

                <h2 className='nameText'>{props.name}</h2>
                <p className='bioText'>{props.bio}</p>
            </div>
            <div className='commentBox' style={{height: '25%'}}>
                <Comment />
                <DeleteDoggo />
            </div>
        </div>
    )
}

export default Doggos;