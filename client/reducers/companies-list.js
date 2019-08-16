// @flow
import { handleActions } from 'redux-actions';
import initialState from '../store/initial-state';
import type { CompaniesList, Action } from '../types';
import {
  getListSelectedItemsNum,
  getListSelectedItemsSector,
  mergeListSelectedItems,
  getListUnselectedItems,
} from '../selectors/graph';
import * as GraphActions from '../actions/graph';

export default handleActions({
  [GraphActions.selectCompany]: (state: CompaniesList, { payload }: Action) =>
    state.map(item =>
      item.id === payload.id ?
        {
          ...item,
          ...payload,
          selected: true,
        } :
        {
          ...item,
          disabled: item.sector !== payload.sector ||
            (!item.selected && getListSelectedItemsNum(state) > 0),
        }),
  [GraphActions.deselectCompany]: (state: CompaniesList, { payload }: Action) =>
    state.map(item =>
      item.id === payload.id ?
        {
          ...item,
          ...payload,
          selected: false,
        } :
        {
          ...item,
          disabled: getListSelectedItemsNum(state) > 1 &&
            item.sector !== payload.sector,
        }),
  [GraphActions.addCompany]: (state: CompaniesList, { payload }: Action) =>
    state.concat({
      ...payload,
      disabled: (getListSelectedItemsNum(state) === 1 &&
        getListSelectedItemsSector(state) !== payload.sector) ||
        getListSelectedItemsNum(state) > 1,
    }),
  [GraphActions.mergeSelectedCompanies]: (state: CompaniesList) =>
    getListUnselectedItems(state)
      .map(item => ({ ...item, disabled: false }))
      .concat([mergeListSelectedItems(state)]),
}, initialState.companiesList);
