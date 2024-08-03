// src/api/conversation.js
import axios from "axios";

const instructionMessage = {
  role: "system",
  content:
    "You are an AI Model. You must answer questions. Use examples for explanations. If someone asks about you, then tell him that, 'I am MasterAI developed by MasterAI team'.",
};

export const getChatCompletion = async (messages) => {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [instructionMessage, ...messages],
  };
};
