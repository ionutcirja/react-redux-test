/* eslint-disable no-underscore-dangle */
// @flow
import { createStore, compose } from 'redux';
import reducer from '../reducers';
import initialState from './initial-state';

export default (debug: boolean = true) => {
  const composeEnhancers = (debug && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(
    reducer,
    initialState,
    composeEnhancers(),
  );
};
