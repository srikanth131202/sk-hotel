const express = require("express");

const app = express();              // ✅ THIS WAS MISSING
const PORT = 3000;

// Middleware to read JSON body
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Server running" });
});

// Booking API
app.post("/book", (req, res) => {
  const { name, roomType, date } = req.body;

  console.log("Booking received:", name, roomType, date);

  res.json({
    message: "Booking successful",
    data: { name, roomType, date }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
