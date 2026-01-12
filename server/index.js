const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Prompt2Vid backend running");
});

app.post("/generate-video", (req, res) => {
  console.log("Received request at /generate-video");
  console.log("Request body:", req.body);
  const { prompt, style, duration } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  res.json({
    message: "Video generation request received",
    data: { prompt, style, duration },
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
