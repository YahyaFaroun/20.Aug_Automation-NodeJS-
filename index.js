//Import Express
const express = require ('express')

//Server erstellen
const app = express()

//Server abrufen
app.listen(3009,() => {
    console.log('Server listening at http:localhost:3009')
})
//Static file server
app.use(express.static('public'))

//Routing
app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})
app.get('/contact', (req,res) => {
    res.sendFile('./views/contact.html', {root: __dirname})
})
app.get('/blog', (req,res) => {
    res.sendFile('./views/blog.html', {root: __dirname})
})

//404
app.use((req,res) => {
    res.status(404)
    res.sendFile('./views/404.html', {root: __dirname} )
})