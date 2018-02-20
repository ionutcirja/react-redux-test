import { createSelector } from 'reselect';

const computeListMin = items => Math.min(...items);
const computeListMax = items => Math.max(...items);

const graphItemsKeyValuesSelector = (list, key) =>
  list.map(item => item[key]);

export const graphItemsMinKeyValuesSelector = createSelector(
  graphItemsKeyValuesSelector,
  computeListMin,
);

export const graphItemsMaxKeyValuesSelector = createSelector(
  graphItemsKeyValuesSelector,
  computeListMax,
);

const graphSelectedItemsSelector = list =>
  list.filter(item => item.selected);

export const graphUnselectedItemsSelector = list =>
  list.filter(item => !item.selected);

const graphCumulativeSelectedItemsSelector = list =>
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

export const graphMergedSelectedItemsSelector = createSelector(
  graphSelectedItemsSelector,
  graphCumulativeSelectedItemsSelector,
);

export const graphSelectedItemsNumSelector = list =>
  list.reduce((acc, curr) => curr.selected ? acc + 1 : acc, 0);

export const graphSelectedItemSectorSelector = list =>
  list.filter(item => item.selected)[0].sector;