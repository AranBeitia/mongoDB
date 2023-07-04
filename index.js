const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3001
const { typeError } = require('./middlewares/errors')
const { dbConnection } = require('./config/config')
const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')
const cors = require('cors')

app.use(express.json())

app.use(cors())
dbConnection()

app.use('/products', require('./routes/products'))
app.use('/users', require('./routes/users'))
app.use('/orders', require('./routes/orders'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

app.use(typeError)

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
