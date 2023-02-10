const Author = require("../models/Author")

const createAuthor = async (req, res) => {
    if (!req.body.name || !req.body.bio || !req.body.website) res.status(404).send("Not Found")

    const author = new Author({
        name: req.body.name,
        bio: req.body.bio,
        website: req.body.website,
    })

    const result = await author.save()
    res.status(200).send(result)
}

module.exports = { createAuthor }