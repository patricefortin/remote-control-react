import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { createLogger } from 'redux-logger';

import './index.css';
import rootReducer from './reducers';
import App from './react/App';
import HttpRemoter from './remoter/HttpRemoter';
import StubRemoter from './remoter/StubRemoter';
import registerServiceWorker from './registerServiceWorker';

//const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    //loggerMiddleware,
  ),
);

const connectedApp = (
  <Provider store={store}>  
    <App
      remoter={new HttpRemoter(store)}
      //remoter={new StubRemoter()}
    />
</Provider>
);


ReactDOM.render(connectedApp, document.getElementById('root'));
registerServiceWorker();
