// @flow
import React from 'react';
import Graph from '../../containers/graph';
import SectorsList from '../sectors';
import AddBtn from '../../containers/add-btn';
import MergeBtn from '../../containers/merge-btn';
import './index.scss';

type Props = {
  sectorsList: Array<string>,
};

const App = (props: Props) => (
  <div className="app">
    <Graph />
    <SectorsList sectorsList={props.sectorsList} />
    <div className="menu">
      <AddBtn sectorsList={props.sectorsList} />
      <MergeBtn />
    </div>
  </div>
);

export default App;
