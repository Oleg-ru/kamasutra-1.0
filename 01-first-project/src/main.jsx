import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";

const postData = [
    {id: 1, message: "Вацап бро 🙌", likeCount: "15"},
    {id: 2, message: "Я изучаю React, а ты?", likeCount: "20"},
    {id: 3, message: "Давай вместе", likeCount: "10500"},
    {id: 4, message: "Нас уже 10500!!!!", likeCount: "1000001"},
];

const dialogs = [
    {id: 1, name: 'Vladimir'},
    {id: 2, name: 'Anton'},
    {id: 3, name: 'Anastasia'},
];

const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Hello!!!"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "Allloooooo"},
    {id: 5, message: "By"},
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App postData={postData} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>
  </StrictMode>,
)
