import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import counterReducer from './Store/counterReducer';
import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from '@reduxjs/toolkit/dist/devtoolsExtension'
import {Provider} from 'react-redux';

import rootReducer from './Store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store : 전역 상태 관리하는 공간
// store만들던 이전 방법
// const store = createStore()
const store = configureStore({reducer: rootReducer}, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
