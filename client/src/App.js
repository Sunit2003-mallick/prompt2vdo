import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("cinematic");
  const [duration, setDuration] = useState(5);

  const handleGenerate = () => {
    alert("Video generation will be added next!");
  };

  return (
    <div className="container">
      <h1>Prompt2Vid</h1>
      <p className="subtitle">AI Text to Video Generator</p>

      <textarea
        className="prompt-input"
        placeholder="Describe the video you want..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <div className="controls">
        <select value={style} onChange={(e) => setStyle(e.target.value)}>
          <option value="cinematic">Cinematic</option>
          <option value="animation">Animation</option>
          <option value="realistic">Realistic</option>
        </select>

        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value={3}>3 seconds</option>
          <option value={5}>5 seconds</option>
          <option value={10}>10 seconds</option>
        </select>
      </div>

      <button className="generate-btn" onClick={handleGenerate}>
        Generate Video
      </button>
    </div>
  );
}

export default App;
