const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
import OpenAI from 'openai';
import { useState } from 'react'

import FrenchFlag from '../assets/fr-flag.png'
import SpanishFlag from '../assets/sp-flag.png'
import JapaneseFlag from '../assets/jpn-flag.png'

const Body = () => {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('');
  const [buttonText, setButtonText] = useState('Translate');
  const [validationError, setValidationError] = useState('');
  const [translationDone, setTranslatationDone] = useState(false);

  const translateText = () => {
    setValidationError('');
    if (!sourceText) {
      setValidationError('Please enter some text to translate');
      return;
    }

    if (!language) {
      setValidationError('Please select a language to translate to');
      return;
    }

    setButtonText('Translating...');

    // generate a response
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true
    });

    const messages =  [
      {
        role: 'system',
        content: 'You are a helpful translator assistant for french, spanish & japanese translations.'
      },
      {
        role: 'user',
        content: `Translate this text to ${language}: ${sourceText}`
      }
    ];

    openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages
    }).then((response) => {
      setTranslatedText(response.choices[0].message.content);
      setTranslatationDone(true);
    }).catch((error) => {
      setValidationError(`An error occurred while translating the text: ${error}`);
    }).finally(() => {
      setButtonText('Translate');
    });
  };

  const doStartOver = () => {
    setSourceText('');
    setTranslatedText('');
    setLanguage('');
    setTranslatationDone(false);
  }

  return (
    <div className="body-wrapper">
      <div className="form-control">
        <label className='form-label' htmlFor="">Text to translate 👇</label>
        <textarea name="" placeholder="How are you?" onChange={(event) => {
          setSourceText(event.target.value);
        }} value={sourceText}></textarea>
      </div>

      { translatedText &&
      <div className="form-control">
        <label className='form-label' htmlFor="">Your translation 👇</label>
        <textarea name="" placeholder="" value={translatedText} readOnly></textarea>
      </div> }

      { !translatedText &&
      <div className="form-control">
        <label className='form-label' htmlFor="">Select language 👇</label>

        <label htmlFor="french" className="language-option">
          <input type="radio" name="language" id="french" value="french" onChange={(event) => { setLanguage(event.target.value) }} />
          French <img src={FrenchFlag} alt="French flag" />
        </label>

        <label htmlFor="spanish" className="language-option">
          <input type="radio" name="language" id="spanish" value="spanish" onChange={(event) => { setLanguage(event.target.value) }} />
          Spanish <img src={SpanishFlag} alt="Spanish flag" />
        </label>

        <label htmlFor="japanese" className="language-option">
          <input type="radio" name="language" id="japanese" value="japanese" onChange={(event) => { setLanguage(event.target.value) }} />
          Japanese <img src={JapaneseFlag} alt="Japanese flag" />
        </label>
      </div> }

      {validationError && <div className="error">{ validationError }</div> }

      <div className="form-control">
        { !translationDone && <button onClick={() => { translateText() }}>{buttonText}</button> }
        { translationDone && <button onClick={() => { doStartOver() }}>Start Over</button> }
      </div>
    </div>
  )
}

export default Body