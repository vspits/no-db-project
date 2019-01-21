let dogs = [
    {
        name: 'Jayla',
        image: './Jayla.JPG',
        bio: 'Very good doggo, best of all the doggos',
        comments: '',
        index: 0
    },
    {
        name: 'Kodiak',
        image: './Kodiak.jpg',
        bio: 'Very big lazy doggo',
        comments: '',
        index: 1
    },
    {
        name: 'Jack',
        image: './Jack.jpeg',
        bio: 'Good with kids doggo',
        comments: '',
        index: 2
    },
]

module.exports = {
    getDoggos: (request, response) => {
        console.log(dogs)
        response.status(200).send(dogs)
    },
    post: (request, response) => {
        const index = dogs[dogs.length-1].index+1

        const newDog = {
            name: request.body.name,
            image: request.body.image,
            bio: request.body.bio,
            index: index
        }
        dogs.push(newDog)
        response.status(200).send(dogs)
    },
    update: (request, response) => {
        let {index} = request.params
        let {text} = request.body

        let object = dogs.find((element) => {
            return element.index === +index;
        })
        object.name = text
        response.status(200).send(dogs)
    },
    delete: (request, response) => {
        const deleteDog = request.params.index;
        let dogIndex = dogs.findIndex(dog => {
            dog.index === deleteDog})
        dogs.splice(dogIndex, 1)
        response.status(200).send(dogs)
    }
}