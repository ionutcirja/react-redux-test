import React from 'react';
import { shallow } from 'enzyme';
import Graph from '../../containers/graph';
import AddBtn from '../../containers/add-btn';
import MergeBtn from '../../containers/merge-btn';
import Component from './';

describe('App component', () => {
  const renderProps = {
    sectorsList: [
      'sector-1',
      'sector-2',
      'sector-3',
      'sector-4',
    ],
  };

  describe('render', () => {
    it('should render a sectors list', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      expect(wrapper.find('Sectors').props().sectorsList).toEqual(renderProps.sectorsList);
    });

    it('should render a graph', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      expect(wrapper.find(Graph).length).toEqual(1);
    });

    it('should render an add button', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      expect(wrapper.find(AddBtn).props().sectorsList).toEqual(renderProps.sectorsList);
    });

    it('should render a add button', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      expect(wrapper.find(MergeBtn).length).toEqual(1);
    });
  });
});
