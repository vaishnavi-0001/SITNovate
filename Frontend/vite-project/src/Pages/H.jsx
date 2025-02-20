import { useState } from "react";
import { generateText } from "./huggingFaceAPI"; // Import API function

function H () {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    const generatedText = await generateText(input);
    setOutput(generatedText);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Hugging Face GPT-2 Text Generator</h1>
      <input
        type="text"
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "10px", width: "300px", margin: "10px" }}
      />
      <br />
      <button onClick={handleGenerate} style={{ padding: "10px 20px" }}>
        Generate Text
      </button>
      <h3>Output:</h3>
      <p>{output}</p>
    </div>
  );
}

export default H;