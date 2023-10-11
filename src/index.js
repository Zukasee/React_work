import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id: 1, name: 'Kirill admin'},
  {id: 2, name: 'Vika seller'}
]

let messagesData = [
  {id: 1, text: 'Hi'},
  {id: 2, text: 'How are you?'},
  {id: 3, text: 'bb'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  dialogs={dialogsData} messages={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
