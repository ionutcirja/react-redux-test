import uuid from 'uuid/v4';

export default {
  graph: [
    {
      id: uuid(),
      sector: 'automobile',
      valuation: 1000000,
      revenue: 500000,
      incorporationDate: 1227846400000,
    },
    {
      id: uuid(),
      sector: 'agriculture',
      valuation: 3500000,
      revenue: 1300000,
      incorporationDate: 1477846400000,
    },
    {
      id: uuid(),
      sector: 'agrifood',
      valuation: 120000,
      revenue: 24000,
      incorporationDate: 1427846400000,
    },
    {
      id: uuid(),
      sector: 'commodities',
      valuation: 360999,
      revenue: 140000,
      incorporationDate: 1327846400000,
    },
  ],
};
