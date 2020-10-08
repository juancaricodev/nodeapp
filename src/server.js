const express = require('express')
const MongoClient = require('mongodb')
require('dotenv').config()

const PORT = process.env.PORT
const DBURL = process.env.DB_URL
// Se declara la db
let db

// Se crea la instancia app (puede tener otro nombre)
const app = express()

// Lógica para conectar la db
MongoClient.connect(DBURL, {
  useUnifiedTopology: true
}, (err, database) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
  db = database
})

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