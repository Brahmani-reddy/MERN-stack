const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

// Create Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Create Model
const Student = mongoose.model("Student", studentSchema);


// CREATE
app.post("/students", async (req, res) => {

    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    });

    await student.save();

    res.send("Student created successfully");
});


// READ
app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);
});


// UPDATE
app.put("/students/:id", async (req, res) => {

    await Student.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        }
    );

    res.send("Student updated successfully");
});


// DELETE
app.delete("/students/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.send("Student deleted successfully");
});


// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
