let dogs = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
]

module.exports = {
    getDog: (request, response) => {
        console.log(dogs)
        response.status(200).send(dogs)
    }
    addDog: (request, response) => {
        
    }
}