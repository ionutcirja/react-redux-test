// @flow
import { connect } from 'react-redux';
import { State } from '../../constants/types';
import {
  graphItemsMinKeyValuesSelector,
  graphItemsMaxKeyValuesSelector,
} from '../../selectors/graph';
import Graph from '../../components/graph';

const mapStateToProps = (state: State) => ({
  graphList: state.graph,
  minValuation: graphItemsMinKeyValuesSelector(state.graph, 'valuation'),
  maxValuation: graphItemsMaxKeyValuesSelector(state.graph, 'valuation'),
  minIncorporationDate: graphItemsMinKeyValuesSelector(state.graph, 'incorporationDate'),
  maxIncorporationDate: graphItemsMaxKeyValuesSelector(state.graph, 'incorporationDate'),
  minRevenue: graphItemsMinKeyValuesSelector(state.graph, 'revenue'),
  maxRevenue: graphItemsMaxKeyValuesSelector(state.graph, 'revenue'),
});

export default connect(mapStateToProps)(Graph);
