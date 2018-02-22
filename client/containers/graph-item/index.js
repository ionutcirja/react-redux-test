// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dispatch } from '../../constants/types';
import * as GraphActions from '../../actions/graph';
import GraphItem from '../../components/graph-item';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(GraphActions, dispatch),
});

export default connect(null, mapDispatchToProps)(GraphItem);
