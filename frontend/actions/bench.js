import * as benchAPI from '../util/bench';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches,
});

export const fetchBenches = () => (dispatch) => (
  benchAPI.fetchBenches()
    .then((benches) => dispatch(receiveBenches(benches)))
);
