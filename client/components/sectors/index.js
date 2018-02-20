import React from 'react';
import './index.scss';

type Props = {
  sectorsList: Array<string>,
};

const Sectors = (props: Props) => (
  <ul className="sectors-list">
    {props.sectorsList.map(sector => (
      <li key={sector} className={`sectors-list__item sectors-list__item--${sector}`}>
        {sector}
      </li>
    ))}
  </ul>
);

export default Sectors;
