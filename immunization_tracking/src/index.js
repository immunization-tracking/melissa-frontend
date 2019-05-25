import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/custom_styles.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);