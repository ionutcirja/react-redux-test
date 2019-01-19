// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import type { Dispatch } from 'redux';
import * as GraphActions from '../../actions/graph';
import AddBtn from '../../components/add-btn';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(GraphActions, dispatch),
});

export default connect(null, mapDispatchToProps)(AddBtn);
