/* eslint-disable no-underscore-dangle */
// @flow
import { createStore, compose } from 'redux';
import reducer from '../reducers';
import type { State } from '../types';

export default (initialState: State = {}, debug: boolean = true) => {
  const composeEnhancers = (debug && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(
    reducer,
    initialState,
    composeEnhancers(),
  );
};
