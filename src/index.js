import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, postText: 'Hello, this is my first post!', likesCount: 15},
    {id: 2, postText: 'Great, this is my second post!', likesCount: 7}
]

let dialogs = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Masha'},
    {id: 3, name: 'Inna'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Dasha'}
]

let messages = [
    {id: 1, message: 'Hello, this is my first message'},
    {id: 2, message: 'Thumbnail'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
