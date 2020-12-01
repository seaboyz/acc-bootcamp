// Require express and initialize it
import express from 'express'
const app = express()
// Declare a port variable
const PORT = process.env.PORT || 5000
var httpServer = app.listen(
    PORT,
    console.log(`app is listening on port ${PORT}`)
)
// Require socket.io and pass the server object to it
import socketio from 'socket.io'
const io = new socketio(httpServer)
// Tell our app to use our client folder as static code
app.use(express.static('client'))
// Set up a home route and send the client folder

// Create a socket io connection and handle emissions
io.on('connection', socket => {
    // that are received or to be sent out
    console.log('a new user connected')
    socket.on('New User', nickname => {
        console.log('new user is', nickname)
        io.emit('New User', nickname)
    })
    socket.on('New Message', message => {
        console.log('message received id :', message)
        io.emit('New Message', message)
    })
})
