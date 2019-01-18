// @flow
import { connect } from 'react-redux';
import type { State } from '../../types';
import {
  getListItemsMinKeyValue,
  getListItemsMaxKeyValue,
} from '../../selectors/graph';
import Graph from '../../components/graph';

const mapStateToProps = (state: State) => ({
  companiesList: state.companiesList,
  minValuation: getListItemsMinKeyValue(state.companiesList, 'valuation'),
  maxValuation: getListItemsMaxKeyValue(state.companiesList, 'valuation'),
  minIncorporationDate: getListItemsMinKeyValue(state.companiesList, 'incorporationDate'),
  maxIncorporationDate: getListItemsMaxKeyValue(state.companiesList, 'incorporationDate'),
  minRevenue: getListItemsMinKeyValue(state.companiesList, 'revenue'),
  maxRevenue: getListItemsMaxKeyValue(state.companiesList, 'revenue'),
});

export default connect(mapStateToProps)(Graph);
