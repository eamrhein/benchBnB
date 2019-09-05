import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench';

const mapSTP = ({
  entities: {
    benches,
  },
}) => ({
  benches,
});

const mapDSP = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches()),
});

export default connect(mapSTP, mapDSP)(Search);
