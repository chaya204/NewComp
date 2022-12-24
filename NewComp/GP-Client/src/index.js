/*import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import appReducer from '../src/components/appReducer';
var appStore=createStore(appReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode>
  <BrowserRouter>
  <Provider store={appStore}>
  <App />
  </Provider>
</BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from '../src/components/appReducer';
var appStore=createStore(appReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <React.StrictMode>
 
  <BrowserRouter> 
  <Provider store={appStore}>
  <App />
  </Provider>
</BrowserRouter>

</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();