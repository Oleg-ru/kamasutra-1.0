import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state.js";

export const rootRender = createRoot(document.getElementById('root'));

export const renderEntireTree = (state) => {
    rootRender.render(
        <StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     addMessage={addMessage}
                     updateNewMessageText={updateNewMessageText}
                />
            </BrowserRouter>
        </StrictMode>,
    )
};

