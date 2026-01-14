const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Prompt2Vdo backend running");
});

app.post("/generate-video", async (req, res) => {
  try {
    const { prompt, style, duration } = req.body;

    console.log("Request received:", { prompt, style, duration });

    res.json({
      success: true,
      message: "Video generation request received",
      data: {
        prompt,
        style,
        duration
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Backend error"
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});