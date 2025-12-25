const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Test API
app.get("/", (req, res) => {
  res.send("SK Hotel Backend is running");
});

// Booking API
app.post("/book", (req, res) => {
  const { name, room, date } = req.body;

  console.log("Booking received:", name, room, date);

  res.json({
    message: "Booking successful",
    data: { name, room, date }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
