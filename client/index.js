import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import uuid from 'uuid/v4';
import type { Store } from './types';
import createStore from './store';
import App from './components/app';
import './styles/index.scss';

const SECTORS_LIST = [
  'automobile',
  'agriculture',
  'agrifood',
  'commodities',
];

const initialState = {
  companiesList: [
    {
      id: uuid(),
      sector: SECTORS_LIST[0],
      valuation: 1000000,
      revenue: 500000,
      incorporationDate: 1227846400000,
    },
    {
      id: uuid(),
      sector: SECTORS_LIST[1],
      valuation: 3500000,
      revenue: 1300000,
      incorporationDate: 1477846400000,
    },
    {
      id: uuid(),
      sector: SECTORS_LIST[2],
      valuation: 120000,
      revenue: 24000,
      incorporationDate: 1427846400000,
    },
    {
      id: uuid(),
      sector: SECTORS_LIST[3],
      valuation: 360999,
      revenue: 140000,
      incorporationDate: 1327846400000,
    },
  ],
};

const store: Store = createStore(initialState);

render(
  <Provider store={store}>
    <App sectorsList={SECTORS_LIST} />
  </Provider>,
  document.getElementById('root'),
);
