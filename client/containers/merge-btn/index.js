// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { State, Dispatch } from '../../types';
import * as GraphActions from '../../actions/graph';
import { getListSelectedItemsNum } from '../../selectors/graph';
import MergeBtn from '../../components/merge-btn';

const mapStateToProps = (state: State) => ({
  isBtnEnabled: getListSelectedItemsNum(state.companiesList) === 2,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(GraphActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MergeBtn);
