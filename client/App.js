import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// Base stylesheet
require('./main.css');

const history = browserHistory;

export default function App(props) {
  return (
    <Provider store={props.store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
