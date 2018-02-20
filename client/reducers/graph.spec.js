import deepFreeze from 'deep-freeze';
import reducers from './graph';
import * as actions from '../actions/graph';

describe('Graph reducers', () => {
  describe('selectCompany', () => {
    it('should mark a company as selected and mark all the different sectors companies as disabled ' +
      'if the current selected companies number is equal with 0', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
        },
        {
          id: 2,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const payload = actions.selectCompany({
        id: 1,
        sector: 'a',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
          disabled: false,
        },
        {
          id: 3,
          sector: 'b',
          disabled: true,
        },
        {
          id: 4,
          sector: 'b',
          disabled: true,
        },
      ];

      expect(reducers(initialState, payload)).toEqual(output);
    });

    it('should mark a company as selected and mark all the other unselected companies as disabled ' +
      'if the current selected companies number is bigger than 0', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
          disabled: false,
        },
        {
          id: 7,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const action = actions.selectCompany({
        id: 2,
        sector: 'a',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
          selected: true,
          disabled: false,
        },
        {
          id: 2,
          sector: 'a',
          selected: true,
          disabled: false,
        },
        {
          id: 7,
          sector: 'a',
          disabled: true,
        },
        {
          id: 3,
          sector: 'b',
          disabled: true,
        },
        {
          id: 4,
          sector: 'b',
          disabled: true,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });
  });

  describe('deselectCompany', () => {
    it('should mark a company as unselected and mark all the different sectors companies as enabled ' +
      'if the current selected companies number is equal or less than 1', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
          disabled: true,
        },
        {
          id: 3,
          sector: 'b',
          disabled: true,
        },
        {
          id: 4,
          sector: 'b',
          disabled: true,
        },
      ];
      deepFreeze(initialState);

      const action = actions.deselectCompany({
        id: 1,
        sector: 'a',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
          selected: false,
        },
        {
          id: 2,
          sector: 'a',
          disabled: false,
        },
        {
          id: 3,
          sector: 'b',
          disabled: false,
        },
        {
          id: 4,
          sector: 'b',
          disabled: false,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });

    it('should mark a company as unselected and mark all the different sectors companies as disabled ' +
      'if the current selected companies number is bigger than 1', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
          selected: true,
        },
        {
          id: 7,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const action = actions.deselectCompany({
        id: 1,
        sector: 'a',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
          selected: false,
        },
        {
          id: 2,
          sector: 'a',
          selected: true,
          disabled: false,
        },
        {
          id: 7,
          sector: 'a',
          disabled: false,
        },
        {
          id: 3,
          sector: 'b',
          disabled: true,
        },
        {
          id: 4,
          sector: 'b',
          disabled: true,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });
  });

  describe('addCompany', () => {
    it('should add a company and mark it as enabled if the current selected companies number is equal with 0', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
        },
        {
          id: 2,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const action = actions.addCompany({
        id: 5,
        sector: 'b',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
        },
        {
          id: 2,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
        {
          id: 5,
          sector: 'b',
          disabled: false,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });

    it('should add a company and mark it as enabled if the current selected companies number is equal with 1 and ' +
      'its sector is the same as the sector of the selected company', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const action = actions.addCompany({
        id: 5,
        sector: 'a',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
        {
          id: 5,
          sector: 'a',
          disabled: false,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });

    it('should add a company and mark it as disabled if the current selected companies number is equal with 1 and ' +
      'its sector is not the same as the sector of the selected company', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const action = actions.addCompany({
        id: 5,
        sector: 'b',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
        {
          id: 5,
          sector: 'b',
          disabled: true,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });

    it('should add a company and mark it as disabled if the current selected companies number is bigger than 1', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
          selected: true,
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const action = actions.addCompany({
        id: 5,
        sector: 'a',
      });

      const output = [
        {
          id: 1,
          sector: 'a',
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
          selected: true,
        },
        {
          id: 3,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
        {
          id: 5,
          sector: 'a',
          disabled: true,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });
  });

  describe('mergeSelectedCompanies', () => {
    it('should merge the selected companies (keep the id, sector, revenue and incorporationDate from the oldest ' +
      'company and sum the valuations) into a single one (push it at the end of the list) ' +
      'and enable all the unselected companies', () => {
      const initialState = [
        {
          id: 1,
          sector: 'a',
          incorporationDate: 1,
          revenue: 10,
          valuation: 100,
          selected: true,
        },
        {
          id: 2,
          sector: 'a',
          revenue: 20,
          valuation: 200,
          incorporationDate: 2,
          selected: true,
        },
        {
          id: 3,
          disabled: true,
          sector: 'b',
        },
        {
          id: 4,
          sector: 'b',
        },
      ];
      deepFreeze(initialState);

      const action = actions.mergeSelectedCompanies();

      const output = [
        {
          id: 3,
          disabled: false,
          sector: 'b',
        },
        {
          id: 4,
          disabled: false,
          sector: 'b',
        },
        {
          id: 1,
          sector: 'a',
          incorporationDate: 1,
          revenue: 10,
          valuation: 300,
        },
      ];

      expect(reducers(initialState, action)).toEqual(output);
    });
  });
});
