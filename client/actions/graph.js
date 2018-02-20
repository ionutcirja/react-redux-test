// @flow
import { createAction } from 'redux-actions';
import * as ActionTypes from '../constants/action-types';

export const selectCompany = createAction(ActionTypes.SELECT_COMPANY);
export const deselectCompany = createAction(ActionTypes.DESELECT_COMPANY);
export const addCompany = createAction(ActionTypes.ADD_COMPANY);
export const mergeSelectedCompanies = createAction(ActionTypes.MERGE_SELECTED_COMPANIES);
