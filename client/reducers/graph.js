// @flow
import { handleActions } from 'redux-actions';
import initialState from '../store/initial-state';
import { State, Action } from '../constants/types';
import {
  getListSelectedItemsNum,
  getListSelectedItemsSector,
  mergeListSelectedItems,
  getListUnselectedItems,
} from '../selectors/graph';
import * as GraphActions from '../actions/graph';

export default handleActions({
  [GraphActions.selectCompany]: (state: State, action: Action) =>
    state.map(item =>
      item.id === action.payload.id ?
        Object.assign(
          {},
          { ...item },
          { ...action.payload },
          { selected: true },
        ) :
        Object.assign(
          {},
          { ...item },
          {
            disabled:
              item.sector !== action.payload.sector ||
              (!item.selected && getListSelectedItemsNum(state) > 0),
          },
        )),
  [GraphActions.deselectCompany]: (state: State, action: Action) =>
    state.map(item =>
      item.id === action.payload.id ?
        Object.assign(
          {},
          { ...item },
          { ...action.payload },
          { selected: false },
        ) :
        Object.assign(
          {},
          { ...item },
          {
            disabled:
              getListSelectedItemsNum(state) > 1 &&
              item.sector !== action.payload.sector,
          },
        )),
  [GraphActions.addCompany]: (state: State, action: Action) =>
    []
      .concat(state)
      .concat({
        ...action.payload,
        disabled:
          (getListSelectedItemsNum(state) === 1 &&
            getListSelectedItemsSector(state) !== action.payload.sector) ||
          getListSelectedItemsNum(state) > 1,
      }),
  [GraphActions.mergeSelectedCompanies]: (state: State) =>
    getListUnselectedItems(state)
      .map(item =>
        Object.assign({}, { ...item }, { disabled: false }))
      .concat([mergeListSelectedItems(state)]),
}, initialState.graph);
