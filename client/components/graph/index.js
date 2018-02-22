import React from 'react';
import { CompaniesList } from '../../constants/types';
import GraphItem from '../../containers/graph-item';
import './index.scss';

type Props = {
  companiesList: CompaniesList,
  minValuation: number,
  maxValuation: number,
  minIncorporationDate: number,
  maxIncorporationDate: number,
  minRevenue: number,
  maxRevenue: number,
};

const Graph = (props: Props) => (
  <div className="graph__wrapper">
    <ul className="graph">
      {props.companiesList.map(item => (
        <GraphItem
          key={item.id}
          {...item}
          minValuation={props.minValuation}
          maxValuation={props.maxValuation}
          minIncorporationDate={props.minIncorporationDate}
          maxIncorporationDate={props.maxIncorporationDate}
          minRevenue={props.minRevenue}
          maxRevenue={props.maxRevenue}
        />
      ))}
    </ul>
  </div>
);

export default Graph;
