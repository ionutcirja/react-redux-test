import React from 'react';
import uuid from 'uuid/v4';
import './index.scss';

type Props = {
  sectorsList: Array<string>,
  actions: {
    addCompany: Function,
  },
};

const generateRandomDate = (start, end) =>
  new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime()))).getTime();

const generateRandomNumber = (start, end) =>
  Math.floor((Math.random() * (end - start)) + start);

const getArrayRandomEntry = array =>
  array[Math.floor(Math.random() * array.length)];

const AddBtn = (props: Props) => (
  <button
    className="button button--add"
    onClick={() =>
      props.actions.addCompany({
        id: uuid(),
        sector: getArrayRandomEntry(props.sectorsList),
        valuation: generateRandomNumber(100000, 10000000),
        revenue: generateRandomNumber(10000, 5000000),
        incorporationDate: generateRandomDate(new Date(1990, 0, 1), new Date()),
      })
    }
  >
    Add a company
  </button>
);

export default AddBtn;
