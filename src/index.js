import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './pages/main'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allreducers from './reducers'

// =======================><>|Main style|<><=======================

import './assets/css/style.css'
import './assets/css/layout.css'

// =======================><>|Main style|<><=======================

// =======================><>|Redux|<><=======================

const store = createStore(
    allreducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// =======================><>|Redux|<><=======================

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
