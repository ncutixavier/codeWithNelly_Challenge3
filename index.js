const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const AlbumRoutes =require('./routes/Album')

require('dotenv').config()
const app = express()

app.use(cors())
app.options('*', cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.use('/api/v1/albums', AlbumRoutes)

app.get('/', (req, res) => {
    res.json({
        message: "This is Album API"
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
