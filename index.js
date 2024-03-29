const express = require('express')
const mongoose = require('mongoose')
const mongodb =require('mongodb')
const port = 5000
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const book = require("./routes/book.Route")
const author = require("./routes/author.Route")
const user = require("./routes/user.route")
const cors = require('cors')
const { db } = require('./config/db')
app.use(express.json())


corsoption = {
    origin:['*'],
    credentials: true,
}

app.use(cors(corsoption))
app.use("/api/v1",book)
app.use("/api/v1",author)
app.use("/api/v1",user)

app.listen(port,()=>{
    db()
    console.log(`server is listening on port${port}`)
})