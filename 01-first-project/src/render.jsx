import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import  {addPost} from "./redux/state.js";

export const renderEntireTree = (state) => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>
        </StrictMode>,
    )
};

