import { useState, useEffect } from 'react'
// const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
// import OpenAI from 'openai';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

export default App
