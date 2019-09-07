import * as benchAPI from '../util/bench';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches,
});

export const receiveBench = (bench) => ({
  type: RECEIVE_BENCH,
  bench,
});

// AJAX CALLS from UTIL
export const createBench = (bench) => (dispatch) => (
  benchAPI.createBench(bench)
    .then((createdBench) => dispatch(receiveBench(createdBench)))
);

export const fetchBenches = (data) => (dispatch) => (
  benchAPI.fetchBenches(data)
    .then((benches) => dispatch(receiveBenches(benches)))
);
