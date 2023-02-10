require("dotenv").config()
const connectDB = require("./config/db")
connectDB()

const { createAuthor } = require("./controllers/authorController")
const { createBook, getBooks } = require("./controllers/bookController")


const express = require('express')
const app = express()
app.use(express.json())

// ADD AUTHOR
// {
//     "name": "",
//     "bio": "",
//     "website": ""
// }
app.post("/api/author", createAuthor)

// ADD BOOK
// {
//     "title": "",
//     "author": ""
// }
app.post("/api/book", createBook)

// GET BOOK
app.get("/api/book", getBooks)

app.listen(process.env.PORT, () => {
    console.log("Listening on", process.env.PORT)
})
