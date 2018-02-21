/* eslint-disable no-global-assign */
import React from 'react';
import { shallow } from 'enzyme';
import uuid from 'uuid/v4';
import Component from './';

jest.mock('uuid/v4');

describe('AddBtn component', () => {
  const renderProps = {
    sectorsList: [
      'sector-1',
      'sector-2',
      'sector-3',
      'sector-4',
    ],
    actions: {
      addCompany: jest.fn(),
    },
  };

  describe('render', () => {
    it('should render a button', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      expect(wrapper.find('button').length).toEqual(1);
    });
  });

  describe('events handlers', () => {
    uuid.mockReturnValue('uuid');

    beforeEach(() => {
      const dateMock = jest.fn()
        .mockReturnValueOnce({
          getTime: () => 1000,
        })
        .mockReturnValueOnce({
          getTime: () => 2000,
        })
        .mockReturnValueOnce({
          getTime: () => 1500,
        });
      Date = jest.fn().mockImplementation(dateMock);
      Math.random = jest.fn().mockReturnValue(0.5);
    });

    afterEach(() => {
      Math.random.mockRestore();
      Date.mockRestore();
    });

    it('should call add company action on button click', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      wrapper.find('button').props().onClick();
      expect(renderProps.actions.addCompany).toHaveBeenCalledWith({
        id: 'uuid',
        sector: 'sector-3',
        valuation: 5050000,
        revenue: 2505000,
        incorporationDate: 1500,
      });
      expect(Date.mock.calls[2]).toEqual([1500]);
    });
  });
});
