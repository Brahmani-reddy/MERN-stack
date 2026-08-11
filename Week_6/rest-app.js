const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Brahmani", age: 18 },
  { id: 2, name: "Priya", age: 19 }
];

// GET - send all students
app.get("/students", (req, res) => {
  res.json(students);
});

// GET - dynamic URL
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);

  res.json(student);
});

// POST - receive JSON and add student
app.post("/students", (req, res) => {
  const student = req.body;

  students.push(student);

  res.json(student);
});

// PUT - update student
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const student = students.find(s => s.id === id);

  student.name = req.body.name;
  student.age = req.body.age;

  res.json(student);
});

// DELETE - delete student
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter(s => s.id !== id);

  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
