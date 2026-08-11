const express = require("express");
const app = express();
cosnt PORT = 3000;
const students = [
  {
    name: "Brahmani",
    age: 18,
    college: "SVECW"
  },
  {
    name: "Priya",
    age: 19,
    college: "SVECW"
  }
];

app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
