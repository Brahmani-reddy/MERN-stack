const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express.js</h1><p>You have successfully visited my Github.</p>');
});

app.get('/about', (req, res) => {
  res.send('This is built using Express.js by Brahmani Sunkara. ');
});

app.get('/api/status', (req, res) => {
  res.json({
    active:true,
    version: "1.0.0",
    message: "Express.js is running successfully."
  });
});

app.listen(PORT, () => {
  console.log('Successfully running Express.js on port ' + PORT);
  console.log('Press Ctrl + c to stop the server.');
});