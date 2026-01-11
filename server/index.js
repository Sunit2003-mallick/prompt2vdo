const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Prompt2Vid backend running");
});

// Video generation endpoint (placeholder)
app.post("/generate-video", (req, res) => {
  const { prompt, style, duration } = req.body;

  res.json({
    message: "Video generation request received",
    data: { prompt, style, duration },
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
