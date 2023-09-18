const express = require('express');
const app = express();
const PORT = process.env.PORT||8000;

const cors = require('cors'); // Import the cors middleware

// Use cors middleware
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to send the username
app.post('/send-username', (req, res) => {
  const { username, password } = req.body;
    console.log(username)
  // Check if the provided password matches the common password
  if (password === 'yam123') {
    res.json({ username });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT,() => {
  console.log(`Server is running on port ${PORT}`);
});
