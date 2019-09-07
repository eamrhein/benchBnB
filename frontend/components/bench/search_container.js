import { connect } from 'react-redux';
import Search from './search';
import { fetchBenches } from '../../actions/bench';
import { updateFilter } from '../../actions/filter';

const mapSTP = ({
  entities: {
    benches,
  },
}) => ({
  benches,
});

const mapDSP = (dispatch) => ({
  fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mapSTP, mapDSP)(Search);
