import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware, routerReducer, ConnectedRouter} from 'react-router-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import productsReducer from './store/reducers/products';
import usersReducer from './store/reducers/users';

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  routing: routerReducer
});

const history = createHistory();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancers);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
