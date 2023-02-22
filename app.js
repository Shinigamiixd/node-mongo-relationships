require("dotenv").config()
const connectDB = require("./config/db")
connectDB()

const { createAuthor } = require("./controllers/authorController")
const { createBook, getBooks, deleteBook } = require("./controllers/bookController")


const express = require("express")
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


// GET BOOKS
app.get("/api/book", getBooks)

// DELTE BOOK BY ID
app.get("api/book/:id", deleteBook)


app.listen(process.env.PORT, () => {
    console.log("Listening on PORT", process.env.PORT)
})
