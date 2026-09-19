const express = require("express");

const app = express();

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// GET
app.get("/submit-get", (req, res) => {

    const name = req.query.name;
    const branch = req.query.branch;
    const semester = req.query.semester;

    res.send(`
        <h2>Student Information</h2>
        <p>Name: <b>${name}</b></p>
        <p>Branch: <u>${branch}</u></p>
        <p>Semester: ${semester}</p>
    `);
});

// POST
app.post("/submit-post", (req, res) => {

    const name = req.body.name;
    const branch = req.body.branch;
    const semester = req.body.semester;

    res.send(`
        <h2>Student Information</h2>
        <p>Name: <b>${name}</b></p>
        <p>Branch: <u>${branch}</u></p>
        <p>Semester: ${semester}</p>
    `);
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});