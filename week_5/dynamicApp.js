const express = require('express');
const app = express();
const PORT = 3000;

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;

    res.send(`User Profile. You are viewing the profile of user with ID: ${userId}`);
});

app.get('/flights/:from-:to', (req, res) => {
    const { from, to } = req.params;

    res.send(`Searching for flights from ${from} arriving at ${to}.`);
});

app.get('/search', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: "Search Results",
        filteringBy: category || "None",
        sortingBy: sort || "Default"
    });
});

app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});