// @flow
import { connect } from 'react-redux';
import { State } from '../../constants/types';
import {
  getListItemsMinKeyValue,
  getListItemsMaxKeyValue,
} from '../../selectors/graph';
import Graph from '../../components/graph';

const mapStateToProps = (state: State) => ({
  graphList: state.graph,
  minValuation: getListItemsMinKeyValue(state.graph, 'valuation'),
  maxValuation: getListItemsMaxKeyValue(state.graph, 'valuation'),
  minIncorporationDate: getListItemsMinKeyValue(state.graph, 'incorporationDate'),
  maxIncorporationDate: getListItemsMaxKeyValue(state.graph, 'incorporationDate'),
  minRevenue: getListItemsMinKeyValue(state.graph, 'revenue'),
  maxRevenue: getListItemsMaxKeyValue(state.graph, 'revenue'),
});

export default connect(mapStateToProps)(Graph);
