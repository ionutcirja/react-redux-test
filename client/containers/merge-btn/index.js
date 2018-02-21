// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GraphActions from '../../actions/graph';
import { getListSelectedItemsNum } from '../../selectors/graph';
import MergeBtn from '../../components/merge-btn';

const mapStateToProps = state => ({
  isBtnEnabled: getListSelectedItemsNum(state.graph) === 2,
});

const mapDispatchToProps = (dispatch: Function) => ({
  actions: bindActionCreators(GraphActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MergeBtn);
