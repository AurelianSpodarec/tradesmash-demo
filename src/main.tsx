import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import store from "@/store/store";

import App from './views/App'
import './styles/styles.scss'

import Modal from './views/features/Modal/Modal';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
    <Provider store={store}>
        
        <Modal />
        <App />

    </Provider>
    </React.StrictMode>,
)