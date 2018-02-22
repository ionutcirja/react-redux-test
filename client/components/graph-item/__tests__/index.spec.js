import React from 'react';
import { shallow } from 'enzyme';
import Component from '../';

describe('GraphItem component', () => {
  let renderProps;

  beforeEach(() => {
    renderProps = {
      id: 'uuid',
      sector: 'sector-1',
      valuation: 2500,
      revenue: 220,
      incorporationDate: 10500,
      minValuation: 2000,
      maxValuation: 3000,
      minIncorporationDate: 10000,
      maxIncorporationDate: 20000,
      minRevenue: 200,
      maxRevenue: 300,
      actions: {
        selectCompany: jest.fn(),
        deselectCompany: jest.fn(),
      },
    };
  });

  describe('render', () => {
    it('should render a list item and set the size, position and correct class names', () => {
      let wrapper = shallow(<Component {...renderProps} />);
      let props = wrapper.find('li').props();
      expect(props.style).toEqual({
        height: 65,
        left: '5%',
        top: '80%',
        width: 65,
      });
      expect(props.className).toContain('sector-1');
      expect(props.className).not.toContain('selected');
      expect(props.className).not.toContain('disabled');

      renderProps.disabled = true;
      wrapper = shallow(<Component {...renderProps} />);
      props = wrapper.find('li').props();
      expect(props.className).not.toContain('selected');
      expect(props.className).toContain('disabled');

      renderProps.selected = true;
      renderProps.disabled = false;
      wrapper = shallow(<Component {...renderProps} />);
      props = wrapper.find('li').props();
      expect(props.className).not.toContain('disabled');
      expect(props.className).toContain('selected');
    });
  });

  describe('events handlers', () => {
    it('should not call any action on click if the element is disabled', () => {
      renderProps.disabled = true;
      const wrapper = shallow(<Component {...renderProps} />);
      wrapper.find('li').props().onClick();
      expect(renderProps.actions.selectCompany).not.toHaveBeenCalled();
      expect(renderProps.actions.deselectCompany).not.toHaveBeenCalled();
    });

    it('should call select company action on click if the element is enabled and it is not selected already', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      wrapper.find('li').props().onClick();
      expect(renderProps.actions.selectCompany).toHaveBeenCalledWith({
        id: 'uuid',
        sector: 'sector-1',
      });
    });

    it('should call deselect company action on click if the element is enabled and it is selected already', () => {
      renderProps.selected = true;
      const wrapper = shallow(<Component {...renderProps} />);
      wrapper.find('li').props().onClick();
      expect(renderProps.actions.deselectCompany).toHaveBeenCalledWith({
        id: 'uuid',
        sector: 'sector-1',
      });
    });
  });
});
