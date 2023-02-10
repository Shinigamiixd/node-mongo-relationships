require("dotenv").config()
const connectDB = require("./config/db")


connectDB()

const express = require("express")
const app = express()
app.use(express.json())



// createAuthor(
//     "Kazimeras",
//     "best writer in the whole universe",
//     "www.kazimeras.com"
// )

// createBook("book title", "63e61b3266dccdda3a566d74")

// try {
//     app.listen(process.env.PORT)
//     console.log("Listening on PORT")
// } catch (error) {
//     console.error(error)
// }
