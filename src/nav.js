// Routing...

const express = require('express')
const app = express()
const port =3000
app.get("/", (req, res) => {
    res.send("<h1>Welcome to home page</h1>")
    res.write("<h2> wElcome</h2>")
})
app.get("/about", (req, res) => {
    res.send("welcome to about page")
})
app.get("/contact", (req, res) => {
    res.send("welcome to contact page")
})
// json data  we can use send or json both
app.get("/temp", (req, res) => {
    res.send([
        {
        id:1,
        name:"Tazmeen"
    },
    {
        id:1,
        name:"Tazmeen"
    },
    { 
        id:1,
        name:"Tazmeen"
    },

])
})
app.get("/json", (req, res) => {
    res.json([
        {
        id:1,
        name:"Tazmeen"
    },
    {
        id:1,
        name:"Tazmeen"
    },
    {
        id:1,
        name:"Tazmeen"
    },

])
})
app.listen(port, () => {
    console.log(`Listening to the port no ${port}`)
})
