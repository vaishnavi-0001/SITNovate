import "react";
import axios from "axios";

// Use your Hugging Face API Token
const HF_TOKEN = "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"; // Replace with your actual token
const MODEL = "gpt2"; // Model for text generation

// Function to send a request to Hugging Face API
export const generateText = async (inputText) => {
  const API_URL = "https://api-inference.huggingface.co/models/${MODEL}";

  try {
    const response = await axios.post(
      API_URL,
      { inputs: inputText }, // Sending input text to model
      {
       headers: {
          Authorization: Bearer ${HF_TOKEN},
          "Content-Type": "application/json",
        }, 
      }
    );
    return response.data[0].generated_text; // Return generated text
  } catch (error) {
    console.error("Error calling Hugging Face API:", error);
    return "Error generating text";
  }
};