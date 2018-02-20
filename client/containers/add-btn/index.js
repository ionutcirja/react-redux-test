// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GraphActions from '../../actions/graph';
import AddBtn from '../../components/add-btn';

const mapDispatchToProps = (dispatch: Function) => ({
  actions: bindActionCreators(GraphActions, dispatch),
});

export default connect(null, mapDispatchToProps)(AddBtn);
