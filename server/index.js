const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller')

const app = express()


app.use(bodyParser.json())



app.get(`/api/dog`, controller.getDog)

app.post(`/api/dog`, controller.addDog)

app.put(`/api/dog`)

app.delete(`/api/dog`)



app.listen(4000, ()=> console.log('Yo, 4000 is working.'))