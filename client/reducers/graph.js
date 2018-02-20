// @flow
import { handleActions } from 'redux-actions';
import initialState from '../store/initial-state';
import { State, Action } from '../constants/types';
import {
  graphSelectedItemsNumSelector,
  graphSelectedItemSectorSelector,
  graphMergedSelectedItemsSelector,
  graphUnselectedItemsSelector,
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
              (!item.selected && graphSelectedItemsNumSelector(state) > 0),
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
              graphSelectedItemsNumSelector(state) > 1 &&
              item.sector !== action.payload.sector,
          },
        )),
  [GraphActions.addCompany]: (state: State, action: Action) =>
    []
      .concat(state)
      .concat({
        ...action.payload,
        disabled:
          (graphSelectedItemsNumSelector(state) === 1 &&
            graphSelectedItemSectorSelector(state) !== action.payload.sector) ||
          graphSelectedItemsNumSelector(state) > 1,
      }),
  [GraphActions.mergeSelectedCompanies]: (state: State) =>
    graphUnselectedItemsSelector(state)
      .map(item =>
        Object.assign({}, { ...item }, { disabled: false }))
      .concat([graphMergedSelectedItemsSelector(state)]),
}, initialState.graph);
