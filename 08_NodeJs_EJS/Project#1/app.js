const express = require('express')

const app = express()

let pizza = "I like my pizza with extra pineapple."
let cappuccino = "I like my cappuccino to be sweet."
let fries = "I like my fries crispy with extra salt."


app.get('/', (req, res) => {
    res.render('index.ejs', {
        pizza: pizza
    })
})
app.get('/about', (req, res) => {
    res.render('about.ejs', {
        cappuccino: cappuccino
    })
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs', {
        fries: fries
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}. `)
})