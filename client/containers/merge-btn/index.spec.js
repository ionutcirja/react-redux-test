import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from './index';
import * as GraphActions from '../../actions/graph';

jest.mock('../../actions/graph');

describe('MergeBtn container', () => {
  const createMockStore = configureMockStore();
  const store = createMockStore({
    graph: [
      { selected: true },
      { selected: true },
    ],
  });

  describe('render', () => {
    it('should render an MergeBtn component', () => {
      const component = shallow(<Container store={store} />);
      expect(component.find('MergeBtn').length).toEqual(1);
    });
  });

  describe('mapStateToProps', () => {
    it('should pass a isBtnEnabled prop to the component ' +
      '(its value should be true if the number of selected items is equal with 2)', () => {
      const component = shallow(<Container store={store} />);
      expect(component.find('MergeBtn').props().isBtnEnabled).toEqual(true);
    });
  });

  describe('mapDispatchToProps', () => {
    const expectedMergeAction = { type: 'MERGE' };
    GraphActions.mergeSelectedCompanies.mockReturnValue(expectedMergeAction);

    it('should bind the necessary actions to props', () => {
      const component = shallow(<Container store={store} />);
      const props = component.props();
      props.actions.mergeSelectedCompanies();
      expect(GraphActions.mergeSelectedCompanies).toHaveBeenCalled();
      expect(store.getActions()).toEqual([expectedMergeAction]);
    });
  });
});
