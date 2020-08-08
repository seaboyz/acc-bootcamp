const express = require('express')

const data = require('./data')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home.ejs', {
        data: data
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})