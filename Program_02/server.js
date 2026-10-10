const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("."));
app.use(express.urlencoded({ extended: true }));

function sendResponse(data, req, res) {
    const { name, branch, semester } = data;

    res.send(`
        <h1>Form Submission (${req.method})</h1>
        <p>Name: ${name}</p>
        <p>Branch: ${branch}</p>
        <p>Semester: ${semester}</p>
    `);
}

app.get("/submit-get", (req, res) => {
    sendResponse(req.query, req, res);
});

app.post("/submit-post", (req, res) => {
    sendResponse(req.body, req, res);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});