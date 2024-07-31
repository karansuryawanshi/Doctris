import React from 'react'
import {OpenAI} from "openai"

const DoctrisAi = () => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY, 
      });

      const instructionMessage= {
        role: "system",
        content: "You are a AI Model. You must answer questions. Use examples for explanations. If someone ak about you thn tell hin that, 'I am MasterAI Develop by MsaterAI team'",
      };

       async function POST(){
        //   const { userId } = auth();
          const body = await req.json();
          const { messages  } = body;

          const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages :[instructionMessage, ...messages],
          });
      }    

  return (
    <div>
      Hello This is Doctris Ai
    </div>
  )
}

export default DoctrisAi
