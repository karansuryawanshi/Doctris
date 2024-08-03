import React, { useState } from 'react';
import { getChatCompletion } from '../utils/conversation';
// import { z } from 'zod';
import LoggedInHome from './LoggedInHome';
import { Icon } from '@iconify/react/dist/iconify.js';

// const formSchema = z.object({
//   prompt: z.string().nonempty("Prompt is required"),
// });

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const values = { prompt };

    try {
      const userMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];

      setIsLoading(true);
      const response = await getChatCompletion(newMessages);
      setMessages((current) => [...current, userMessage, response]);
      setPrompt('');
      console.log(response)
    } catch (error) {
      if (error.response?.status === 403) {
        proModel.onOpen();
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoggedInHome>
      <div className='flex flex-col'>
        <div className='bottom mb-8 pt-4'>
          <form className='flex mx-8' onSubmit={onSubmit}>
            <input
              className='w-full text-lg border-4 rounded-xl py-2 px-4 border-blue-600'
              type="text"
              placeholder='Enter the prompt'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className='bg-slate-700 px-8 ml-4 rounded-xl text-white font-semibold hover:bg-slate-900 duration-300' disabled={isLoading}>Send</button>
          </form>
        </div>
        <div className='flex-grow overflow-auto'>
          {messages.map((message, index) => (
            <div>
            <div key={index} className={`mx-8 my-2 flex ${message.role === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`p-8 flex gap-x-8 rounded-lg ${message.role === 'user' ? 'bg-blue-200 border-2 border-blue-300 max-w-[66%]  ' : 'bg-muted max-w-[66%] border border-emerald-300 bg-emerald-100 text-right'}`}>
                {message.content}
              </div>
            </div>
            </div>
          ))}

        </div>
      </div>
    </LoggedInHome>
  );
};

export default ChatComponent;
