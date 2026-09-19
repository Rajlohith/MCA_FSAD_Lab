const express = require("express");

const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "Book 1", author: "Author 1", price: 20, quantity: 5 },
    { id: 2, title: "Book 2", author: "Author 2", price: 30, quantity: 10 }
];

// GET all books
app.get("/books", (req, res) => {
    res.json(books);
});

// GET one book
app.get("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

// POST new book
app.post("/books", (req, res) => {

    const book = {
        id: req.body.id ?? books.length + 1,
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        quantity: req.body.quantity
    };

    books.push(book);

    res.json(book);
});

// PUT update book
app.put("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).send("Book not found");
    }

    book.title = req.body.title;
    book.author = req.body.author;
    book.price = req.body.price;
    book.quantity = req.body.quantity;

    res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const initialLength = books.length;

    books = books.filter(b => b.id !== id);

    if (books.length === initialLength) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.json({
        message: "Book deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});