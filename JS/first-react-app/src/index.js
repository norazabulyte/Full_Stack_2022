import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const page =
(
  <div>
    <img src='https://reactnative.dev/img/logo-og.png' width='40px' alt='logo'></img>
    <h1>Fun facts about React</h1>
    <ol>
      <li>lalal</li>
      <li>fffdd</li>
      <li>ssff</li>
      <li>vvvvde</li>
      <li>ffff</li>
    </ol>
  </div>
)



ReactDOM.render(page,document.getElementById('root'))

