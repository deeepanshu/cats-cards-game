import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

import { store } from '@store/store';
import App from '@components/App';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
            <ToastContainer position="bottom-right" hideProgressBar={true} autoClose={10000}/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('app-root'),
);