import './index.css'
import store from "./redux/redux-store.js";
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </StrictMode>);