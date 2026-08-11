const express = require("express");
const app = express();

// Built-in middleware
app.use(express.json());

// Custom logging middleware
function logger(req, res, next) {
  console.log(req.method + " " + req.url);
  next();
}

app.use(logger);

// Mock database
let students = [
  { id: 1, name: "Brahmani", age: 18 },
  { id: 2, name: "Priya", age: 19 }
];

// Routes
app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  students.push(req.body);
  res.json(req.body);
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({ message: "Student deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
