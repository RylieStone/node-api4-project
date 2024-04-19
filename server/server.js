const express = require('express')
const router = require('./methods/routes')

const server = express()
server.use(express.json())
server.use('/api', router)

const port = process.env.PORT || 9000
server.listen(port, () => {
    console.log('server is now running on ' + port)
})