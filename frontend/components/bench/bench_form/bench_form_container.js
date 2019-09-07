import { connect } from 'react-redux';
import BenchForm from './bench_form';
import { createBench } from '../../../actions/bench'
const mapSTP = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng'),
});
const mapDTP = (dispatch) => ({
  createBench: (bench) => dispatch(createBench(bench)),
});

export default connect(mapSTP, mapDTP)(BenchForm);
