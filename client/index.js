import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './store';
import App from './components/app';
import './styles/index.scss';

const SECTORS_LIST = [
  'automobile',
  'agriculture',
  'agrifood',
  'commodities',
];

const store = initStore();

render(
  <Provider store={store}>
    <App sectors={SECTORS_LIST} />
  </Provider>,
  document.getElementById('root'),
);
