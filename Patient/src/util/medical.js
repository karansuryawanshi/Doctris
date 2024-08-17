import axios from "axios";
import "dotenv";

const apiKey = import.meta.env.VITE_DOCTRIS_OPENAI_API;

const instructionMessage = {
  role: "system",
  content:
    "You are an AI Model. You must answer medical related questions and also suggest the medicine. If someone asks about you, then tell him that, 'I am DoctrisAI developed by DoctrisAI team'.",
};
export const getChatCompletion = async (messages) => {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [instructionMessage, ...messages],
  };

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data.choices[0].message;
  } catch (error) {
    console.error(
      "Error getting chat completion:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
