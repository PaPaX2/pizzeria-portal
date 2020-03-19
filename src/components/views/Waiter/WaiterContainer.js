import { connect } from 'react-redux';
import Waiter from './Waiter';
import { getAll, fetchFromAPI, setStatusAPI, getLoadingState } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  setStatus: (payload) => dispatch(setStatusAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
