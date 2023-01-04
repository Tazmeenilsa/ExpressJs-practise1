const express = require('express')
const app = express()


const Path=require('path')
const staticPath=Path.join(__dirname,"../public")

// built-in middleware function to serving static website
app.use(express.static(staticPath))



// app.get("/",(req,res)=>{
// res.send("Hello")
// })
// app.get("/about",(req,res)=>{
// res.send("AboutPage")
// })
app.listen(8000,()=>{
    console.log("Listening")
})
