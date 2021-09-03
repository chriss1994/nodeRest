const express = require('express')
const cors = require('cors')
const app = express()
require('./db')
const product = require('./routes/product')

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//Return all products in the collection
app.get('/getAllProducts', product.getProducts)

//Return all products in the collection with name = name
app.get('/getProducts/:name', product.getProductsByName)

//Save a new product with model product
app.post('/saveProduct', product.saveProduct)
