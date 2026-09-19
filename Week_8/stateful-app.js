const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

// Session middleware
app.use(
    session({
        secret: "mysecretkey",
        resave: false,
        saveUninitialized: false
    })
);

// Login page
app.get("/", (req, res) => {
    res.render("login", {
        error: ""
    });
});

// Login
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "1234") {

        // Maintain state using session
        req.session.username = username;

        // Create cookie
        res.cookie("username", username);

        res.redirect("/dashboard");

    } else {

        res.render("login", {
            error: "Invalid username or password"
        });
    }
});

// Dashboard
app.get("/dashboard", (req, res) => {

    // Check session
    if (!req.session.username) {
        return res.redirect("/");
    }

    // Read cookie
    const username = req.cookies.username;

    res.render("dashboard", {
        username: username
    });
});

// Logout
app.get("/logout", (req, res) => {

    // Destroy session
    req.session.destroy();

    // Clear cookie
    res.clearCookie("username");

    res.redirect("/");
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
