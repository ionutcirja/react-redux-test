import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from '../';
import * as GraphActions from '../../../actions/graph';

jest.mock('../../../actions/graph');

describe('AddBtn container', () => {
  const createMockStore = configureMockStore();
  const store = createMockStore({});

  describe('render', () => {
    it('should render an AddBtn component', () => {
      const component = shallow(<Container store={store} />);
      expect(component.find('AddBtn').length).toEqual(1);
    });
  });

  describe('mapDispatchToProps', () => {
    const expectedAddAction = { type: 'ADD' };
    GraphActions.addCompany.mockReturnValue(expectedAddAction);

    it('should bind the necessary actions to props', () => {
      const component = shallow(<Container store={store} />);
      const props = component.props();
      props.actions.addCompany();
      expect(GraphActions.addCompany).toHaveBeenCalled();
      expect(store.getActions()).toEqual([expectedAddAction]);
    });
  });
});
