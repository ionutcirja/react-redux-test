import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Container from './index';

describe('Graph container', () => {
  const createMockStore = configureMockStore();
  const state = {
    graph: [
      {
        valuation: 100,
        incorporationDate: 300000,
        revenue: 2000,
      },
      {
        valuation: 700,
        incorporationDate: 100000,
        revenue: 5000,
      },
      {
        valuation: 200,
        incorporationDate: 200000,
        revenue: 1000,
      },
    ],
  };
  const store = createMockStore(state);

  describe('render', () => {
    it('should render an Graph component', () => {
      const component = shallow(<Container store={store} />);
      expect(component.find('Graph').length).toEqual(1);
    });
  });

  describe('mapStateToProps', () => {
    it('should pass the graph list props and ' +
      'the min / max values of valuation, revenue and incorporationDate props', () => {
      const component = shallow(<Container store={store} />);
      const props = component.find('Graph').props();
      expect(props.graphList).toEqual(state.graph);
      expect(props.minValuation).toEqual(100);
      expect(props.maxValuation).toEqual(700);
      expect(props.minIncorporationDate).toEqual(100000);
      expect(props.maxIncorporationDate).toEqual(300000);
      expect(props.minRevenue).toEqual(1000);
      expect(props.maxRevenue).toEqual(5000);
    });
  });
});
