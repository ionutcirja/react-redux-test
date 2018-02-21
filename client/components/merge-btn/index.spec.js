import React from 'react';
import { shallow } from 'enzyme';
import Component from './';

describe('MergeBtn component', () => {
  let renderProps;

  beforeEach(() => {
    renderProps = {
      isBtnEnabled: false,
      actions: {
        mergeSelectedCompanies: jest.fn(),
      },
    };
  });

  describe('render', () => {
    it('should render a button', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      expect(wrapper.find('button').length).toEqual(1);
    });
  });

  describe('events handlers', () => {
    it('should call merge companies action on button click if the button is enabled', () => {
      let wrapper = shallow(<Component {...renderProps} />);
      wrapper.find('button').props().onClick();
      expect(renderProps.actions.mergeSelectedCompanies).not.toHaveBeenCalled();

      renderProps.isBtnEnabled = true;
      wrapper = shallow(<Component {...renderProps} />);
      wrapper.find('button').props().onClick();
      expect(renderProps.actions.mergeSelectedCompanies).toHaveBeenCalled();
    });
  });
});
