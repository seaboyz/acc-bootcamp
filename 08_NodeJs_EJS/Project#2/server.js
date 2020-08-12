const express = require('express')

const app = express()

let messages = [
    {name: "Jim", message: "I'm a cartoonist"},
    {name: "Jane", message: "How about pasta for dinner?"},
    {name: "Gary", message: "I like my pasta with butter"}
 ]

app.get('/messages', (req, res) => {
    res.render('messages.ejs', {
        messages: messages
    })
})

const PORT = process.env.PORT || 3000
app.listen(3000, () => {
    console.log(`App is listening on ${PORT}.`)
})