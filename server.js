const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, "build")));

// Serve index.html for any unknown routes (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Frontend is running on port ${PORT}`);
});
