// @flow
import { createAction } from 'redux-actions';

export const SELECT_COMPANY = 'SELECT_COMPANY';
export const DESELECT_COMPANY = 'DESELECT_COMPANY';
export const ADD_COMPANY = 'ADD_COMPANY';
export const MERGE_SELECTED_COMPANIES = 'MERGE_SELECTED_COMPANIES';

export const selectCompany = createAction(SELECT_COMPANY);
export const deselectCompany = createAction(DESELECT_COMPANY);
export const addCompany = createAction(ADD_COMPANY);
export const mergeSelectedCompanies = createAction(MERGE_SELECTED_COMPANIES);
