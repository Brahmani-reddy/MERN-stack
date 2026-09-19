//configure template engine
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//render dynamic values
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", {
        name: "Tejaswi",
        course: "AIML"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Accepting inputs
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    res.send("Name: " + name + "<br>Email: " + email);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// basic validation

const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form", { error: "" });
});

app.post("/submit", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;

    if (name === "" || email === "") {
        res.render("form", {
            error: "Please fill all fields."
        });
    } else {
        res.send("Form submitted successfully!");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
