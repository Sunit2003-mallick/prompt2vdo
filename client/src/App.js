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

    const data = await response.json();
    setResponseData(data);


    alert("Request sent to backend successfully!");
  } catch (error) {
    console.error("Error connecting to backend:", error);
    alert("Failed to connect to backend");
  } finally {
    setLoading(false);
  }
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

      <button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading}
      >
      {loading ? "Generating..." : "Generate Video"}
      </button>


      {responseData && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Backend Response</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}

      {/* {responseData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Generated Video (Preview)</h3>
          <video width="100%" controls>
          <source src="/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    )} */}
    </div>
  );
}

export default App;
