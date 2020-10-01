const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT

// Se crea la instancia app (puede tener otro nombre)
const app = express()

app.get('/', (request, response) => {
  response.send('Hola Mundo')
})

app.get('/products', (request, response) => {
  response.json({
    data: 'Ok'
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port: http://localhost:${PORT}`)
})