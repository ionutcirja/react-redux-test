// @flow
import { connect } from 'react-redux';
import { State } from '../../constants/types';
import {
  listItemsMinKeyValue,
  listItemsMaxKeyValue,
} from '../../selectors/graph';
import Graph from '../../components/graph';

const mapStateToProps = (state: State) => ({
  graphList: state.graph,
  minValuation: listItemsMinKeyValue(state.graph, 'valuation'),
  maxValuation: listItemsMaxKeyValue(state.graph, 'valuation'),
  minIncorporationDate: listItemsMinKeyValue(state.graph, 'incorporationDate'),
  maxIncorporationDate: listItemsMaxKeyValue(state.graph, 'incorporationDate'),
  minRevenue: listItemsMinKeyValue(state.graph, 'revenue'),
  maxRevenue: listItemsMaxKeyValue(state.graph, 'revenue'),
});

export default connect(mapStateToProps)(Graph);
