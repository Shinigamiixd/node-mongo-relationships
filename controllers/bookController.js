const Book = require("../models/Book")

const createBook = async (req, res) => {
    if (!req.body.title || !req.body.author) res.status(404).send("Not Found")

    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
    })

    res.status(200).json(book)
}

const getBooks = async (req, res) => {
    const book = await Book
        .find()
        .populate("author", "name bio website -_id")
        .select("title")
        
    res.status(200).json(book)
}

module.exports = { createBook, getBooks }
