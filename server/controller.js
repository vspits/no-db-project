let dogs = [
    {
        name: 'Jayla',
        image: '',
        description: 'Very good doggo, best of all the doggos',
        comments: ''
    },
    {
        name: 'Kodiak',
        image: '',
        description: 'Very lazy doggo',
        comments: ''
    },
    {
        name: 'Jack',
        image: '',
        description: 'Loving doggo',
        comments: ''
    },
]

module.exports = {
    getDog: (request, response) => {
        console.log(dogs)
        response.status(200).send(dogs)
    }
    addDog: (request, response) => {
        
    }
}