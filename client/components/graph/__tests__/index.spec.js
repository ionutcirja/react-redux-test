import React from 'react';
import { shallow } from 'enzyme';
import GraphItem from '../../../containers/graph-item/index';
import Component from '../';

describe('Graph component', () => {
  const renderProps = {
    companiesList: [
      {
        id: '1',
        sector: 'sector-1',
        valuation: 1500,
        incorporationDate: 15000000,
        revenue: 60000,
      },
      {
        id: '2',
        sector: 'sector-2',
        valuation: 1800,
        incorporationDate: 16000000,
        revenue: 70000,
      },
    ],
    minValuation: 2000,
    maxValuation: 4000,
    minIncorporationDate: 10000000,
    maxIncorporationDate: 30000000,
    minRevenue: 50000,
    maxRevenue: 80000,
  };

  describe('render', () => {
    it('should a list of graph items', () => {
      const wrapper = shallow(<Component {...renderProps} />);
      const list = wrapper.find(GraphItem);
      const listLength = list.length;
      expect(listLength).toEqual(renderProps.companiesList.length);
      let listItemProps;
      let companyData;
      for (let i = 0; i < listLength; i += 1) {
        listItemProps = list.at(i).props();
        companyData = renderProps.companiesList[i];
        expect(listItemProps.sector).toEqual(companyData.sector);
        expect(listItemProps.valuation).toEqual(companyData.valuation);
        expect(listItemProps.incorporationDate).toEqual(companyData.incorporationDate);
        expect(listItemProps.revenue).toEqual(companyData.revenue);
        expect(listItemProps.minValuation).toEqual(renderProps.minValuation);
        expect(listItemProps.maxValuation).toEqual(renderProps.maxValuation);
        expect(listItemProps.minIncorporationDate).toEqual(renderProps.minIncorporationDate);
        expect(listItemProps.maxIncorporationDate).toEqual(renderProps.maxIncorporationDate);
        expect(listItemProps.minRevenue).toEqual(renderProps.minRevenue);
        expect(listItemProps.maxRevenue).toEqual(renderProps.maxRevenue);
      }
    });
  });
});
