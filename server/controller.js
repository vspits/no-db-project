let dogs = [
    {
        name: 'Jayla',
        image: '',
        bio: 'Very good doggo, best of all the doggos',
        comments: '',
        index: 0
    },
    {
        name: 'Kodiak',
        image: '',
        bio: 'Very lazy doggo',
        comments: '',
        index: 1
    },
    {
        name: 'Jack',
        image: '',
        bio: 'Loving doggo',
        comments: '',
        index: 2
    },
]

module.exports = {
    getDog: (request, response) => {
        console.log(dogs)
        response.status(200).send(dogs)
    },
    addDog: (request, response) => {
        const index = dogs[dogs.length-1].index+1

        const newDog = {
            name: request.body.name,
            image: request.body.image,
            bio: request.body.bio,
            index: index
        }
        dogs.push(newDog)
        response.status(200).send(dogs)
    }
}