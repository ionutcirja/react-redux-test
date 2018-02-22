import React from 'react';
import { shallow } from 'enzyme';
import Component from '../';

describe('Sectors component', () => {
  const renderProps = {
    sectorsList: [
      'sector-1',
      'sector-2',
      'sector-3',
      'sector-4',
    ],
  };

  describe('render', () => {
    it('should a list of sectors', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      const list = wrapper.find('li');
      const listLength = list.length;
      expect(listLength).toEqual(renderProps.sectorsList.length);
      for (let i = 0; i < listLength; i += 1) {
        const listItem = list.at(i);
        expect(listItem.text()).toEqual(renderProps.sectorsList[i]);
        expect(listItem.props().className).toContain(renderProps.sectorsList[i]);
      }
    });
  });
});
