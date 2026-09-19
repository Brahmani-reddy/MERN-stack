const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Sample data
let students = [
    { id: 1, name: "Tejaswi", course: "AIML" },
    { id: 2, name: "Anu", course: "CSE" }
];

// READ - Get all students
app.get("/api/students", (req, res) => {
    res.json(students);
});

// CREATE - Add student
app.post("/api/students", (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };

    students.push(student);

    res.json(student);
});

// UPDATE - Update student
app.put("/api/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.course = req.body.course;

    res.json(student);
});

// DELETE - Delete student
app.delete("/api/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
