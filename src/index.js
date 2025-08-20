const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("MoodAngels backend is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

