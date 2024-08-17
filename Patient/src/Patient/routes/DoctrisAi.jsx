import React, { useState } from 'react';
// import { getChatCompletion } from '../utils/conversation';
import { getChatCompletion } from '../../util/medical';
import LoggedInHome from './LoggedInHome';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // console.log("REACT_APP_DOCTRIS_OPENAI_API")
  // console.log("REACT_APP_DOCTRIS_OPENAI_API",process.env.REACT_APP_DOCTRIS_OPENAI_API)

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
      <div className='flex flex-col bg-gradient-to-b from-white via-purple-200 to-white'>
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
            <button
              type="submit"
              className='bg-slate-700 px-8 ml-4 rounded-xl text-white font-semibold hover:bg-slate-900 duration-300'
              disabled={isLoading}
            >
              Send
            </button>
          </form>
        </div>
        <div className='flex-grow overflow-auto'>
          {isLoading && (
            <div className="flex justify-center items-center">
                <span className=" mt-4 w-16 h-16 border-t-4 border-blue-800 border-solid rounded-full animate-spin"></span>
            </div>
          )}
          {messages.map((message, index) => (
            <div key={index} className={`mx-8 my-2 flex ${message.role === 'user' ? 'justify-start' : 'justify-end'}`}>
              <div className={`p-8 flex gap-x-8 rounded-lg ${message.role === 'user' ? 'bg-blue-200 border-2 border-blue-300 max-w-[66%]' : 'bg-muted max-w-[66%] border border-emerald-300 bg-emerald-100 text-right'}`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LoggedInHome>
  );
};

export default ChatComponent;
