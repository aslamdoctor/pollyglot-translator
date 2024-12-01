import { useState, useEffect } from 'react'
// const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
// import OpenAI from 'openai';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  // const [response, setResponse] = useState('');

  // useEffect(() => {
    // const openai = new OpenAI({
    //   apiKey: OPENAI_API_KEY,
    //   dangerouslyAllowBrowser: true
    // });

    // generate a response
    // openai.chat.completions.create({
    //   model: 'gpt-4',
    //   messages: [
    //     {
    //       role: 'system',
    //       content: 'You are a helpful assistant'
    //     },
    //     {
    //       role: 'user',
    //       content: 'What is the capital of the United States?'
    //     }
    //   ]
    // }).then((response) => {
    //   console.log(response.choices[0].message.content);
    //   setResponse(response.choices[0].message.content);
    // }).catch((error) => {
    //   console.error(error);
    // });

    // generate an image
    /* openai.images.generate({
      model: 'dall-e-3',
      prompt: `A 19th-century woman with long brown hair standing in front of a green vista with cloudy skies. She's looking at the viewer with a faint smile on her lips.`,
      size: '1024x1024',
      n: 1,
      style: 'vivid',
      response_format: 'url'
    }).then((response) => {
      console.log(response);
      setResponse(response.data[0].url);
    }).catch((error) => {
      console.error(error);
    }); */
  // }, []);

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

export default App
