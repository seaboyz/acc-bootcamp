const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}.`)
})