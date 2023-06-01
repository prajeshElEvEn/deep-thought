const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const app = express()

app.use('/api/v3/app', require('./routes/eventRoutes'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
