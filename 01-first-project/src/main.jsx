import './index.css'
import store from "./redux/redux-store.js";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import {Provider} from "./StoreContext.jsx";

export const rootRender = createRoot(document.getElementById('root'));

export const renderEntireTree = (state) => {
    rootRender.render(
        <StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </StrictMode>,
    )
};

renderEntireTree(store.getState());

store.subscribe(() => {
    renderEntireTree(store.getState())
})