/* eslint no-alert:off */

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// internal modules
import App from './components/app';
// import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris']
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: (state = null, action) => state
});

// Middlewares
const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('chat_app')
);
