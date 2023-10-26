import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addMessage } from './redux/state';

export let rerenderTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addMessage={addMessage}/>
  </React.StrictMode>
);
}


reportWebVitals();
