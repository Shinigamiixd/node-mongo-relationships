const Author = require("./models/Author")
const Book = require("./models/Book")

async function createAuthor(name, bio, website) {
    const author = new Author({
        name,
        bio,
        website,
    })

    const result = await author.save()
    console.log(result)
}

async function createBook(title, author) {
    const book = new Book({
        title,
        author,
    })

    const result = await book.save()
    console.log(result)
}

async function getBooks() {
    const books = await Book.find().populate("author").select("title")

    console.log(books)
}
