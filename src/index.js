import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/style.scss'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store';
import { Context } from './utils/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Context>
    
);


