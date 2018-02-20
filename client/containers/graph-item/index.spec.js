import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from './index';
import * as GraphActions from '../../actions/graph';

jest.mock('../../actions/graph');

describe('GraphItem container', () => {
  const createMockStore = configureMockStore();
  const store = createMockStore({});

  describe('render', () => {
    it('should render an GraphItem component', () => {
      const component = shallow(<Container store={store} />);
      expect(component.find('GraphItem').length).toEqual(1);
    });
  });

  describe('mapDispatchToProps', () => {
    const expectedSelectAction = { type: 'SELECT' };
    const expectedDeselectAction = { type: 'DESELECT' };
    GraphActions.selectCompany.mockReturnValue(expectedSelectAction);
    GraphActions.deselectCompany.mockReturnValue(expectedDeselectAction);

    it('should bind the necessary actions to props', () => {
      const component = shallow(<Container store={store} />);
      const props = component.props();
      props.actions.selectCompany();
      expect(GraphActions.selectCompany).toHaveBeenCalled();
      props.actions.deselectCompany();
      expect(GraphActions.deselectCompany).toHaveBeenCalled();
      expect(store.getActions()).toEqual([expectedSelectAction, expectedDeselectAction]);
    });
  });
});
