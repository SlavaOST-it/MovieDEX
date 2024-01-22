import React from 'react';
import {Provider} from "react-redux";
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import {App} from './app/App';
import {store} from "./bll/store/store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
);

reportWebVitals();
