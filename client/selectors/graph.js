import { createSelector } from 'reselect';

const getListMinValue = items => Math.min(...items);
const getListMaxValue = items => Math.max(...items);

const listItemsKeyValueMap = (list, key) =>
  list.map(item => item[key]);

export const getListItemsMinKeyValue = createSelector(
  listItemsKeyValueMap,
  getListMinValue,
);

export const getListItemsMaxKeyValue = createSelector(
  listItemsKeyValueMap,
  getListMaxValue,
);

const getListSelectedItems = list =>
  list.filter(item => item.selected);

export const getListUnselectedItems = list =>
  list.filter(item => !item.selected);

const aggregateListSelectedItems = list =>
  list.reduce(
    (acc, curr) => ({
      id: acc.incorporationDate && acc.incorporationDate <= curr.incorporationDate ?
        acc.id :
        curr.id,
      sector: acc.incorporationDate && acc.incorporationDate <= curr.incorporationDate ?
        acc.sector :
        curr.sector,
      valuation: acc.valuation ? acc.valuation + curr.valuation : curr.valuation,
      revenue: acc.incorporationDate && acc.incorporationDate <= curr.incorporationDate ?
        acc.revenue :
        curr.revenue,
      incorporationDate: acc.incorporationDate ?
        Math.min(acc.incorporationDate, curr.incorporationDate) :
        curr.incorporationDate,
    }),
    {},
  );

export const mergeListSelectedItems = createSelector(
  getListSelectedItems,
  aggregateListSelectedItems,
);

export const getListSelectedItemsNum = list =>
  list.reduce((acc, curr) => curr.selected ? acc + 1 : acc, 0);

export const getListSelectedItemsSector = list =>
  list.filter(item => item.selected)[0].sector;
