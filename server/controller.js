let dogs = [
    {
        name: 'Jayla',
        image: './Jayla.JPG',
        bio: 'Very good doggo, best of all the doggos',
        comments: [],
        index: 0
    },
    {
        name: 'Kodiak',
        image: './Kodiak.jpg',
        bio: 'Very big lazy doggo',
        comments: [],
        index: 1
    },
    {
        name: 'Jack',
        image: './Jack.jpeg',
        bio: 'Good with kids doggo',
        comments: [],
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
        const {id, comment} = request.params
        let thisDogComments = []

        const updatedDogs = dogs.map((dog) => {
            if(dog.index === +id){
                dog.comments.push(comment)
                thisDogComments = dog.comments
            }
            return dog;
        })
        dogs = updatedDogs
        response.status(200).send(thisDogComments)
    },

    delete: (request, response) => {
        const deleteDog = request.params.id*1;
        let dogIndex = dogs.findIndex(dog => {
            return dog.index === deleteDog})
        dogs.splice(dogIndex, 1)
        response.status(200).send(dogs)
    }
}