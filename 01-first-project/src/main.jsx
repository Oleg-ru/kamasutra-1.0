import './index.css'
import store from "./redux/redux-store.js";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";

export const rootRender = createRoot(document.getElementById('root'));

export const renderEntireTree = (state) => {
    rootRender.render(
        <StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch}
                />
            </BrowserRouter>
        </StrictMode>,
    )
};

renderEntireTree(store.getState());

store.subscribe(() => {renderEntireTree(store.getState())})