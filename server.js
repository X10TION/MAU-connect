const express = require('express')
const http = require('http')
const app = express()
const httpServer = http.createServer(app)
const port = process.env.PORT || 4200
const socketio = require('socket.io')
const path = require('path')


const publicPath = path.join(__dirname,'public')
app.use(express.static(publicPath))



httpServer.listen(port, () => {
    console.log("serveris runnning : ", port)
})
 
const io = socketio(httpServer)
    io.on('connection', (socket) =>{
        console.log("user connected", socket.id)
    })


