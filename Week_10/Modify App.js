const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HTML Rendering</title>
        </head>

        <body>
            <h1>Hello, Tejaswi!</h1>
            <p>This HTML page is rendered by the Express server.</p>
        </body>
        </html>
    `);

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
