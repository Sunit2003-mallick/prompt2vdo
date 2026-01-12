import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("cinematic");
  const [duration, setDuration] = useState(5);
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
  if (!prompt.trim()) {
    alert("Please enter a prompt");
    return;
  }
  setLoading(true);
  setResponseData(null);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const response = await fetch("http://localhost:5000/generate-video", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        style,
        duration,
      }),
    });

    if (!response.ok) {
        throw new Error("Backend error");
      }

    const data = await response.json();
    setResponseData(data);
  } catch (error) {
    console.error("Error connecting to backend:", error);
    alert("Failed to connect to backend");
  } finally {
    setLoading(false);
  }
};

  return (
  <div className="app">
    {/* Header */}
    <header className="topbar">
      <h1>Prompt2Vdo</h1>
      <span>Text → Video Tool</span>
    </header>

    {/* Main Content */}
    <div className="main-page">
      {/* Left Side Panel */}
      <div className="left-panel">
        <textarea
          className="prompt-box"
          placeholder="Describe the video you want to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <div className="controls-row">
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="cinematic">Cinematic</option>
            <option value="animation">Animation</option>
            <option value="realistic">Realistic</option>
          </select>

          <select value={duration} onChange={(e) => setDuration(e.target.value)}>
            <option value={3}>3 sec</option>
            <option value={5}>5 sec</option>
            <option value={10}>10 sec</option>
          </select>

          <button
            className="generate-btn"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Video Generating..." : "Generate Video"}
          </button>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="right-panel">
        {!responseData && (
          <div className="placeholder">
            <p>🎬 Video preview will appear here</p>
          </div>
        )}
        {responseData && (
          <div className="output">
            <h3>Generated Video</h3>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  </div>
);
}

export default App;
